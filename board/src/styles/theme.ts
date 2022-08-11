import { DefaultTheme } from 'styled-components';

export type ThemeColorsType = keyof DefaultTheme['colors'];
export type ThemeButtonType = keyof DefaultTheme['button'];

export const lightTheme: DefaultTheme = {
  defaultPadding: '16px 24px',

  colors: {
    bgMain: '#f9fbfc',
    bgSub: '#ffffff',
    textMain: '#3d3d4b',
    textSub: '#b9b9b9',
  },
  button: {
    primary: `
      background-color: #575757;
      color: #f9fbfc;
    `,
    secondary: `
      color: #575757;
    `,
  },
};

export const darkTheme: DefaultTheme = {
  defaultPadding: '16px 24px',

  colors: {
    bgMain: '#323436',
    bgSub: '#2c2c2c',
    textMain: '#b5b5b5',
    textSub: '#898f91',
  },
  button: {
    primary: `
      background-color: #b5b5b5;
      color: #323436;
    `,
    secondary: `
      color: #b5b5b5;
    `,
  },
};
