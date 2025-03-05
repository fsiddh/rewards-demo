import moment from 'moment-timezone';

export const convertToOrgTimezone = (utcTime, orgTimezone) => {
  if (!utcTime || !orgTimezone?.label) return 'Conversion to org timezone failed';

  return moment(utcTime).tz(orgTimezone.label).format('DD MMM YYYY');
};
