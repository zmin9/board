import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    defaultPadding: string,

    background: string,
    backgroundSub: string,
    surface: string,
    outline: string,
    divider: string,

    text: {
      high: string,
      medium: string,
      low: string,
    }

    btnPrimary: string,
    btnOnPrimary: string,

    error: string
  }
}
