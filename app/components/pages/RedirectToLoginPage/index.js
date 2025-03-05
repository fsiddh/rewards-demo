import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { withRouter } from 'react-router';
import { compose } from 'redux';

import redirectToLogin from '../../../utils/redirectToLogin';

import './_redirectToLoginPage.scss';
import messages from './messages';

const RedirectToLoginPage = ({ history }) => {
  const timeoutRef = React.useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      redirectToLogin(history);
    }, 300);

    return () => {
      // Clear the timeout on unmount
      clearTimeout(timeoutRef.current);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div className="redirect-login-page">
      <div className="header">
        <FormattedMessage {...messages.header} />
      </div>
      <div className="message">
        <div>
          <FormattedMessage {...messages.message} />
        </div>
        <div>
          <FormattedMessage {...messages.loginAgainMessage} />
        </div>
      </div>
    </div>
  );
};

RedirectToLoginPage.propTypes = {
  history: PropTypes.object.isRequired,
};

RedirectToLoginPage.defaultProps = {
  history: {},
};

export default compose.apply(null, [withRouter])(injectIntl(RedirectToLoginPage));
