import { DefaultTheme } from 'styled-components';
import { hexOpacity, palette } from './palette';

export type TextColorType = keyof DefaultTheme['text'];
export type ButtonColorType = keyof DefaultTheme['button'];

export const lightTheme: DefaultTheme = {
  mainColor: palette.green4,
  background: palette.black10,
  backgroundSub: '#F2F3F2',
  shadow: palette.black1 + hexOpacity['10'],
  divider: palette.black8,
  outline: palette.black5,
  surface: palette.black9,
  text: {
    high: palette.black1,
    medium: palette.black3,
    low: palette.black9,
  },
  button: {
    primary: {
      bgColor: palette.green4,
      hoverBgColor: palette.green3,
      color: palette.green10,
    },
    secondary: {
      bgColor: 'transparent',
      hoverBgColor: palette.black9,
      color: palette.green4,
    },
    outline: {
      bgColor: 'transparent',
      hoverBgColor: palette.black9,
      color: palette.green4,
    },
  },
  toast: {
    success: {
      bgColor: palette.green9,
      color: palette.green1,
    },
    error: {
      bgColor: palette.red9,
      color: palette.red1,
    },
  },
  error: palette.red4,
};

export const darkTheme: DefaultTheme = {
  mainColor: palette.green8,
  background: palette.black1,
  backgroundSub: '#262825',
  shadow: palette.black9 + hexOpacity['10'],
  divider: palette.black3,
  outline: palette.black6,
  surface: palette.black3,
  text: {
    high: palette.black9,
    medium: palette.black8,
    low: palette.black3,
  },
  button: {
    primary: {
      bgColor: palette.green8,
      hoverBgColor: palette.green9,
      color: palette.green2,
    },
    secondary: {
      bgColor: 'transparent',
      hoverBgColor: palette.black2,
      color: palette.green8,
    },
    outline: {
      bgColor: 'transparent',
      hoverBgColor: palette.black2,
      color: palette.green8,
    },
  },
  toast: {
    success: {
      bgColor: palette.green3,
      color: palette.green9,
    },
    error: {
      bgColor: palette.red3,
      color: palette.red9,
    },
  },
  error: palette.red8,
};


