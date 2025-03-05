import CapHeading from '@capillarytech/cap-ui-library/CapHeading';
import CapRow from '@capillarytech/cap-ui-library/CapRow';
import PropTypes from 'prop-types';
import React from 'react';

export const CustomFieldSettings = ({ className, heading }) => {
  return (
    <CapRow className={className} data-testid="custom-field-settings">
      <CapHeading type="h2">{heading}</CapHeading>
    </CapRow>
  );
};

CustomFieldSettings.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string,
};

CustomFieldSettings.defaultProps = {
  className: '',
  heading: '',
};

export default CustomFieldSettings;
