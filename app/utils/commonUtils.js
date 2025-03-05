import { Auth } from '@capillarytech/cap-ui-utils';
import { gtmInitializer } from '@capillarytech/vulcan-react-sdk/utils';
import { isEmpty } from 'lodash';

import appConfig from '../../app-config';
import { ENABLE_REWARDS_CATALOG } from '../components/pages/App/constants';

const { gtm: { useGTM, trackingId } = {}, appName } = appConfig;

export const pushDataToGTM = (eventType, eventObject = {}, userData) => {
  if (useGTM) {
    if (!isEmpty(eventType)) {
      const gtmInstance = gtmInitializer({
        gtmTrackingId: trackingId,
        appName: appName,
        userDetails: userData,
      });
      gtmInstance.push(eventType, eventObject);
    }
  }
};

export const isRewardsCatalogFeatureEnabled = Auth.hasFeatureAccess.bind(
  null,
  ENABLE_REWARDS_CATALOG,
);
