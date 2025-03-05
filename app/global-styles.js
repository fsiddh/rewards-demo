import * as styledVars from '@capillarytech/cap-ui-library/styled/variables';
import { createGlobalStyle } from 'styled-components';

const { CAP_SPACE_04, CAP_SPACE_40, FONT_COLOR_01, FONT_COLOR_04, CAP_SPACE_24 } = styledVars;

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    font-family: 'Roboto', Arial, sans-serif;
    font-size: 14px;
    line-height: unset;
  }

  body.fontLoaded {
    font-family: 'Roboto', Arial, sans-serif;
  }

  #rewards-catalog-container {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'Roboto', Arial, sans-serif;
    line-height: 1.5em;
  }

  .rewards-catalog-body {
    .ant-popover,
    .ant-select-dropdown,
    .ant-select-dropdown.ant-select-dropdown--single,
    .ant-calendar-picker-container,
    .ant-notification,
    .ant-tooltip,
    .ant-modal-mask,
    .ant-modal-wrap {
      z-index: 10003; /* setting z-index, to be able to show the contect on top of slidebox */
    }
  }
  
  
  ul, ol {
    list-style: none;
    padding: 0;
  }

  .pointer-cursor {
    cursor: pointer;
  }

  .truncate-text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
  }

  .align-items-center, div.align-items-center {
    display: flex;
    align-items: center;
  }

  .slide-box-size-medium{
    width: 660px;
  }

  // For Loadable Spin
  &.ant-spin.ant-spin-spinning {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }

  // temp fix
  // Need to handle in cap-react-ui-library
  .ant-input-affix-wrapper .ant-input {
    height: ${CAP_SPACE_40};
    border: 1px solid ${FONT_COLOR_04} !important;
    border-radius: ${CAP_SPACE_04} !important;
    &:focus, &:hover {
      border-color: ${FONT_COLOR_01}!important;
    }
  }

  .settings-create-edit-popover {
    max-width: 27.428rem !important;
    .ant-popover-inner-content {
      padding: ${CAP_SPACE_24};
    }
  }
`;

export default GlobalStyle;
