/* eslint-disable no-restricted-syntax */
/**
 * This script will extract the internationalization messages from all components
 * and package them in the translation json files in the translations file.
 */

require('shelljs/global');

const fs = require('fs');

const { transform } = require('@babel/core');
const nodeGlob = require('glob');
const get = require('lodash/get');

const appConfig = require('../../app-config');
const babel = require('../../babel.config.js');

const addCheckmark = require('./helpers/checkmark');
const animateProgress = require('./helpers/progress');

const DEFAULT_LOCALE = appConfig?.i18n?.defaultLocale ?? 'en-US';
const appLocales = appConfig?.i18n?.locales?.length ? appConfig?.i18n?.locales : [DEFAULT_LOCALE];
const { presets } = babel;
let plugins = babel.plugins || [];

plugins.push('react-intl');

// NOTE: styled-components plugin is filtered out as it creates errors when used with transform
plugins = plugins.filter((p) => p !== 'styled-components');

// Glob to match all messages.js file inside app folder.
//Added statusMessages.js seperately to avoid false positives for messages.js like CampaignMessages.js
//NOTE: do not put spaces in glob pattern below
const FILES_TO_PARSE = 'app/**/*messages.js';

const newLine = () => process.stdout.write('\n');

const getTranslationFileName = (locale) => locale?.replace('_', '-')?.split('-')?.[0];

// Progress Logger
let progress;
const task = (message) => {
  progress = animateProgress(message);
  process.stdout.write(message);

  return (error) => {
    if (error) {
      process.stderr.write(error);
    }
    clearTimeout(progress);
    return addCheckmark(() => newLine());
  };
};

// Wrap async functions below into a promise
const glob = (pattern) =>
  new Promise((resolve, reject) => {
    nodeGlob(pattern, (error, value) => (error ? reject(error) : resolve(value)));
  });

const readFile = (fileName) =>
  new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8', (error, value) => (error ? reject(error) : resolve(value)));
  });

// Store existing translations into memory
const oldLocaleMappings = {};
const localeMappings = {};

// Loop to run once per locale
for (const locale of appLocales) {
  oldLocaleMappings[locale] = {};
  localeMappings[locale] = {};
  // File to store translation messages into
  const translationFileName = `app/translations/${getTranslationFileName(locale)}.json`;
  try {
    // Parse the old translation message JSON files
    const messages = JSON.parse(fs.readFileSync(translationFileName));
    const messageKeys = Object.keys(messages);
    for (const messageKey of messageKeys) {
      oldLocaleMappings[locale][messageKey] = messages[messageKey];
    }
  } catch (error) {
    if (error.code !== 'ENOENT') {
      process.stderr.write(
        `There was an error loading this translation file: ${translationFileName}
        \n${error}`,
      );
    }
  }
}

const extractFromFile = async (filename) => {
  try {
    const code = await readFile(filename);

    const output = await transform(code, { filename, presets, plugins });
    const messages = get(output, 'metadata.react-intl.messages', []);

    for (const message of messages) {
      for (const locale of appLocales) {
        const oldLocaleMapping = oldLocaleMappings[locale][message.id];
        // Merge old translations into the babel extracted instances where react-intl is used
        const newMsg = locale === DEFAULT_LOCALE ? message.defaultMessage : '';
        localeMappings[locale][message.id] = oldLocaleMapping ?? newMsg;
      }
    }
  } catch (error) {
    process.stderr.write(`\nError transforming file: ${filename}\n${error}\n`);
  }
};

const memoryTask = glob(FILES_TO_PARSE);
const memoryTaskDone = task('Storing language files in memory');

memoryTask.then((files) => {
  console.log('@@@@@Messages are being extracted from the following files:');
  files.forEach((fileName) => {
    console.log(fileName);
  });
  memoryTaskDone();

  const extractTask = Promise.all(files.map((fileName) => extractFromFile(fileName)));
  const extractTaskDone = task('Run extraction on all files');
  // Run extraction on all files that match the glob on line 16
  extractTask.then(() => {
    extractTaskDone();

    // Make the directory if it doesn't exist, especially for first run
    mkdir('-p', 'app/translations'); // eslint-disable-line

    let localeTaskDone;
    let translationFileName;

    for (const locale of appLocales) {
      translationFileName = `app/translations/${getTranslationFileName(locale)}.json`;
      localeTaskDone = task(
        `Writing translation messages for ${locale} to: ${translationFileName}`,
      );

      // Sort the translation JSON file so that git diffing is easier
      // Otherwise the translation messages will jump around every time we extract
      const messages = {};
      Object.keys(localeMappings[locale])
        .sort()
        .forEach((key) => {
          messages[key] = localeMappings[locale][key];
        });

      // Write to file the JSON representation of the translation messages
      const prettified = `${JSON.stringify(messages, null, 2)}\n`;

      try {
        fs.writeFileSync(translationFileName, prettified);
        localeTaskDone();
      } catch (error) {
        localeTaskDone(
          `There was an error saving this translation file: ${translationFileName}
          \n${error}`,
        );
      }
    }

    process.exit();
  });
});
