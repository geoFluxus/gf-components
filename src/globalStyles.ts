import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    /* colors */
    --gf-color-bg-base: #FFFFFF;
    --gf-color-bg-tertiary: #F9FAFB;
    --gf-color-bg-debug: orange;
    --gf-color-primary-hover: #3858F2;
    --gf-color-button-primary: #152BEE;
    --gf-color-border-base: #EAECF0;

    --gf-color-text-primary: #1D2939;
    --gf-color-text-secondary: #475467;
    --gf-color-text-tertiary: #667085;

    /* radius */
    --gf-radius-sm: 2px;
    --gf-radius-md: 4px;

    /* padding */
    --gf-padding-sm: 8px;
    --gf-padding-md: 16px;

    /* fonts */
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
    --gf-font: Roboto, sans-serif;
    --gf-display-1: normal normal 600 48px/60px Roboto, sans-serif;

    --gf-header-h1: normal normal 600 38px/46px Roboto, sans-serif;
    --gf-header-h2: normal normal 600 30px/38px Roboto, sans-serif;
    --gf-header-h3: normal normal 600 24px/32px Roboto, sans-serif;
    --gf-header-h4: normal normal 500 20px/28px Roboto, sans-serif;
    --gf-header-h5: normal normal 500 16px/24px Roboto, sans-serif;
    
    --gf-label-xl-bold: normal normal 700 20px/28px Roboto, sans-serif;
    --gf-label-xl-default: normal normal 400 20px/28px Roboto, sans-serif;
    --gf-label-lg-bold: normal normal 700 16px/24px Roboto, sans-serif;
    --gf-label-lg-default: normal normal 400 16px/24px Roboto, sans-serif;
    --gf-label-md-bold: normal normal 700 14px/22px Roboto, sans-serif;
    --gf-label-md-default: normal normal 400 14px/22px Roboto, sans-serif;
    --gf-label-md-italic: normal italic 400 18px/34px Roboto, sans-serif;
    --gf-label-sm-bold: normal normal 700 12px/14px Roboto, sans-serif;
    --gf-label-sm-default: normal normal 400 12px/14px Roboto, sans-serif;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .gf-full-width {
    width: 100%;
  }
`

export default GlobalStyle