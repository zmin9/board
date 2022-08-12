import { DefaultTheme } from 'styled-components';

const color = {
  green: '94, 28%',
  red: '0, 70%',
  black: '60, 2%',
};

const getHSL = (colorName: keyof typeof color, l: number): string => {
  return `hsl(${color[colorName]}, ${l}%)`;
};

// 타입을 따로 지정해서 넘겨주는 것이 좋을 듯 싶습니다.
// export const commonTheme = {
//
// }

export const lightTheme: DefaultTheme = {
  defaultPadding: '16px 24px',
  background: getHSL('black', 99),
  backgroundSub: getHSL('black', 95),
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
  defaultPadding: '16px 24px',
  background: getHSL('black', 10),
  backgroundSub: getHSL('black', 15),
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

export type TextColorType = keyof DefaultTheme['text'];
