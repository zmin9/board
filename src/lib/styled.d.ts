import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    mainColor: string,

    background: string,
    backgroundSub: string,
    shadow: string,
    surface: string,
    outline: string,
    divider: string,

    text: {
      high: string,
      medium: string,
      low: string,
    },

    button: {
      primary: ButtonColorType,
      secondary: ButtonColorType,
      outline: ButtonColorType,
    }

    error: string;
  }
}

type ButtonColorType = {
  bgColor: string,
  hoverBgColor: string,
  color: string,
};
