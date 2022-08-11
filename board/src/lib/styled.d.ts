import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    defaultPadding: string,

    colors: {
      bgMain: string,
      bgSub: string,
      textMain: string,
      textSub: string,
    },
    button: {
      primary: string,
      secondary: string,
    }
  }
}
