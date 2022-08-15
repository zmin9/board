import { DefaultTheme } from 'styled-components';

export type TextColorType = keyof DefaultTheme['text'];

const color = {
  green: '94, 28%',
  red: '0, 70%',
  black: '60, 2%',
};

const getHSL = (colorName: keyof typeof color, l: number): string => {
  return `hsl(${color[colorName]}, ${l}%)`;
};

export const lightTheme: DefaultTheme = {
  mainColor: getHSL('green', 40),
  background: getHSL('black', 99),
  backgroundSub: getHSL('black', 95),
  shadow: 'hsla(0, 0%, 10%, 0.15)',
  btnPrimary: getHSL('green', 40),
  btnOnPrimary: getHSL('green', 100),
  divider: getHSL('black', 80),
  outline: getHSL('black', 50),
  surface: getHSL('black', 90),
  text: {
    high: getHSL('black', 10),
    medium: getHSL('black', 30),
    low: getHSL('black', 90),
  },
  error: getHSL('red', 40),
};

export const darkTheme: DefaultTheme = {
  mainColor: getHSL('green', 80),
  background: getHSL('black', 10),
  backgroundSub: getHSL('black', 15),
  shadow: 'hsla(0, 0%, 90%, 0.15)',
  btnPrimary: getHSL('green', 80),
  btnOnPrimary: getHSL('green', 20),
  divider: getHSL('black', 30),
  outline: getHSL('black', 60),
  surface: getHSL('black', 30),
  text: {
    high: getHSL('black', 90),
    medium: getHSL('black', 80),
    low: getHSL('black', 30),
  },
  error: getHSL('red', 80),
};
