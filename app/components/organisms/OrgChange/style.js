import * as styledVars from '@capillarytech/cap-ui-library/styled/variables';
import { css } from 'styled-components';

const { CAP_SPACE_16 } = styledVars;

export const InlineStyle = css`
  display: inline;
`;

export const styles = css`
  .seconds-right {
    text-align: right;
    padding: ${CAP_SPACE_16} 0;
  }
`;
