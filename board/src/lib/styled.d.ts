import 'styled-components';

declare module 'styled-components' {
  export interface defaultTheme {
    defaultPadding: string,

    colors: {
      bgMain: string,
      bgSub: string,
      textMain: string,
      textSub: string,
    };
  }
}
