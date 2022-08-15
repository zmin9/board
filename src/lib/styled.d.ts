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
    }

    btnPrimary: string,
    btnOnPrimary: string,

    error: string
  }
}
