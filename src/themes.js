import { css } from 'linaria'

/* eslint-disable prettier/prettier */
const elevations = css`
  --elevation-0: none;
  --elevation-1: 0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12);
  --elevation-2: 0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12);
  --elevation-3: 0px 1px 8px 0px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 3px 3px -2px rgba(0,0,0,0.12);
  --elevation-4: 0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12);
  --elevation-5: 0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12);
  --elevation-6: 0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12);
  --elevation-7: 0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12);
  --elevation-8: 0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12);
  --elevation-9: 0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12);
  --elevation-10: 0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12);
  --elevation-11: 0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12);
  --elevation-12: 0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12);
  --elevation-13: 0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12);
  --elevation-14: 0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12);
  --elevation-15: 0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12);
  --elevation-16: 0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12);
  --elevation-17: 0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12);
  --elevation-18: 0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12);
  --elevation-19: 0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12);
  --elevation-20: 0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12);
  --elevation-21: 0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12);
  --elevation-22: 0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12);
  --elevation-23: 0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12);
  --elevation-24: 0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12);
`

const breakpoints = css`
  --breakpoint-tablet: 700px;
  --breakpoint-phone: 450px;
`

const transitions = css`
  --transition-medium: 0.2s ease-in;
`

const colorsLight = css`
  --color-primary-light: #8d83c3;
  --color-primary-main: #5c5485;
  --color-primary-dark: #2f294f;
  --color-primary-contrast-text: #fff;
  
  --color-secondary-light: #c3e9fc;
  --color-secondary-main: #92b7c9;
  --color-secondary-dark: #638798;
  --color-secondary-contrast-text: #fff;

  --color-error-light: #e57373;
  --color-error-main: #f44336;
  --color-error-dark: #d32f2f;
  --color-error-contrastText: #fff;
  
  --color-text-primary: rgba(0, 0, 0, 0.87);
  --color-text-secondary: rgba(0, 0, 0, 0.54);
  --color-text-disabled: rgba(0, 0, 0, 0.38);
  --color-text-hint: rgba(0, 0, 0, 0.55);
  
  --color-paper: #fff;
  --color-default: #fafafa;
  
  --color-black: #000000;
  --color-white: #ffffff;
`


const colorsDark = css`
  --color-primary-light: #716b8d;
  --color-primary-main: #454060;
  --color-primary-dark: #1c1a36;
  --color-primary-contrast-text: #fff;
  
  --color-secondary-light: #ffffed;
  --color-secondary-main: #ebf4ba;
  --color-secondary-dark: #b8c18a;
  --color-secondary-contrast-text: #fff;

  --color-error-light: #e57373;
  --color-error-main: #f44336;
  --color-error-dark: #d32f2f;
  --color-error-contrastText: #fff;
  
  --color-text-primary: rgba(255, 255, 255, 0.87);
  --color-text-secondary: rgba(255, 255, 255, 0.54);
  --color-text-disabled: rgba(255, 255, 255, 0.38);
  --color-text-hint: rgba(255, 255, 255, 0.55);
  
  --color-paper: #212121;
  --color-default: #fafafa;
  
  --color-black: #000000;
  --color-white: #ffffff;
`
/* eslint-enable prettier/prettier */

const lightTheme = `${elevations} ${colorsLight} ${transitions} ${breakpoints}`
const darkTheme = `${elevations} ${colorsDark} ${transitions} ${breakpoints}`

export const ThemesNames = Object.freeze({
  LIGHT: 'LIGHT',
  DARK: 'DARK'
})

export const Themes = Object.freeze({
  [ThemesNames.DARK]: darkTheme,
  [ThemesNames.LIGHT]: lightTheme
})

export const isDarkTheme = (theme) => theme === Themes[ThemesNames.DARK]

export const visuallyHidden = css`
  position: absolute !important;
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px);
  padding: 0 !important;
  border: 0 !important;
  height: 1px !important;
  width: 1px !important;
  overflow: hidden;
`
