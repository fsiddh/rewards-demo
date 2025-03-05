import CustomFieldSettings from '../../organisms/CustomFieldSettings';

export const DEFAULT_CATEGORIES_SETTINGS_PATH = '/settings/categories';
export const DEFAULT_SETTINGS_PATH = '/rewards-catalog/ui/settings';

export const routeParamList = [
  {
    key: 'categories',
    path: 'categories',
    component: CustomFieldSettings,
    heading: 'Categories',
  },
  {
    key: 'currencyPartners',
    path: 'currency-partners',
    component: CustomFieldSettings,
    heading: 'Currency Partners',
  },
  {
    key: 'customFields',
    path: 'custom-fields',
    component: CustomFieldSettings,
    heading: 'Custom Fields',
  },
  {
    key: 'eventNotification',
    path: 'event-notification',
    component: CustomFieldSettings,
    heading: 'Event Notification',
  },
  {
    key: 'fulfillmentStatus',
    path: 'fulfillment-status',
    component: CustomFieldSettings,
    heading: 'Fulfillment Status',
  },
  {
    key: 'geography',
    path: 'geography',
    component: CustomFieldSettings,
    heading: 'Geography',
  },
  {
    key: 'groups',
    path: 'groups',
    component: CustomFieldSettings,
    heading: 'Groups',
  },
  {
    key: 'languages',
    path: 'languages',
    component: CustomFieldSettings,
    heading: 'Languages',
  },
  {
    key: 'redemptionLimit',
    path: 'redemption-limit',
    component: CustomFieldSettings,
    heading: 'Redemption Limit',
  },
];
