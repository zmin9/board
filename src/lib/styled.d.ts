import 'styled-components';
import { ToastMessageType } from '../script/toastMessages';

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
    },
    toast: Record<ToastMessageType, ToastColorType>,
    error: string;
  }
}

type ButtonColorType = {
  bgColor: string,
  hoverBgColor: string,
  color: string,
};

type ToastColorType = {
  bgColor: string,
  color: string,
};
