import styled from 'styled-components';

const withStyledComponent = (WrappedComponent, styles) => {
  const StyledComponent = styled(WrappedComponent)`
    ${styles};
  `;

  StyledComponent.defaultProps = {
    ...WrappedComponent.defaultProps,
  };

  return StyledComponent;
};

export default withStyledComponent;
