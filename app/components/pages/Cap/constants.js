import { defineActionTypes } from '@capillarytech/vulcan-react-sdk/utils';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import globalMessages from '../Cap/messages';

const scope = '/Components/pages/Cap/';

export const actionTypes = defineActionTypes(
  {
    GET_SIDEBAR_MENU_DATA_REQUEST: 'GET_SIDEBAR_MENU_DATA_REQUEST',
    GET_SIDEBAR_MENU_DATA_SUCCESS: 'GET_SIDEBAR_MENU_DATA_SUCCESS',
    GET_SIDEBAR_MENU_DATA_FAILURE: 'GET_SIDEBAR_MENU_DATA_FAILURE',
    CLEAR_SIDEBAR_MENU_DATA: 'CLEAR_SIDEBAR_MENU_DATA',
    GET_TOPBAR_MENU_DATA_REQUEST: 'GET_TOPBAR_MENU_DATA_REQUEST',
    GET_TOPBAR_MENU_DATA_SUCCESS: 'GET_TOPBAR_MENU_DATA_SUCCESS',
    GET_TOPBAR_MENU_DATA_FAILURE: 'GET_TOPBAR_MENU_DATA_FAILURE',
    CLEAR_TOPBAR_MENU_DATA: 'CLEAR_TOPBAR_MENU_DATA',
    GET_USER_DATA_REQUEST: 'GET_USER_DATA_REQUEST',
    GET_USER_DATA_SUCCESS: 'GET_USER_DATA_SUCCESS',
    GET_USER_DATA_FAILURE: 'GET_USER_DATA_FAILURE',
    SWITCH_ORG_REQUEST: 'SWITCH_ORG_REQUEST',
    SWITCH_ORG_SUCCESS: 'SWITCH_ORG_SUCCESS',
    SWITCH_ORG_FAILURE: 'SWITCH_ORG_FAILURE',
    GET_SUPPORTED_LOCALES_REQUEST: 'GET_SUPPORTED_LOCALES_REQUEST',
    GET_SUPPORTED_LOCALES_SUCCESS: 'GET_SUPPORTED_LOCALES_SUCCESS',
    GET_SUPPORTED_LOCALES_FAILURE: 'GET_SUPPORTED_LOCALES_FAILURE',
    GET_ORG_DETAILS_REQUEST: 'GET_ORG_DETAILS_REQUEST',
    GET_ORG_DETAILS_SUCCESS: 'GET_ORG_DETAILS_SUCCESS',
    GET_ORG_DETAILS_FAILURE: 'GET_ORG_DETAILS_FAILURE',
  },
  { prefix: CURRENT_APP_NAME, scope: scope },
);

export const PROGRAM_PERFIX_PATH = '/program/';

export const SIDEBAR_MENU_ITEM_POSITION = 'left';
export const LOYALTY_SETTINGS_URL = '/settings';
export const LOYALTY_NOTIFICATION_URL = '/notifications';
export const ORG_SETTINGS_URL = '/settings';
export const MODULE_NAME_URL = '/settings';
export const HELP_URL = 'https://support.capillarytech.com/en/support/solutions/97443';

export const PRODUCTION = 'production';

export const STANDARD = 'STANDARD';

export const getSettingsMenuData = () => [
  {
    title: <FormattedMessage {...globalMessages.categories} />,
    key: 'categories',
    link: `/settings/categories`,
  },
  {
    title: <FormattedMessage {...globalMessages.currencyPartners} />,
    key: 'currencyPartners',
    link: `/settings/currency-partners`,
  },
  {
    title: <FormattedMessage {...globalMessages.customFields} />,
    key: 'customFields',
    link: `/settings/custom-fields`,
  },
  {
    title: <FormattedMessage {...globalMessages.eventNotification} />,
    key: 'eventNotification',
    link: `/settings/event-notification`,
  },
  {
    title: <FormattedMessage {...globalMessages.fulfillmentStatus} />,
    key: 'fulfillmentStatus',
    link: `/settings/fulfillment-status`,
  },
  {
    title: <FormattedMessage {...globalMessages.geography} />,
    key: 'geography',
    link: `/settings/geography`,
  },
  {
    title: <FormattedMessage {...globalMessages.groups} />,
    key: 'groups',
    link: `/settings/groups`,
  },
  {
    title: <FormattedMessage {...globalMessages.languages} />,
    key: 'languages',
    link: `/settings/languages`,
  },
  {
    title: <FormattedMessage {...globalMessages.redemptionLimit} />,
    key: 'redemptionLimit',
    link: `/settings/redemption-limit`,
  },
];

export const getTopbarMenuDataValue = () => [];
