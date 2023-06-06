import '@emotion/react';

declare module '@emotion/react' {
  interface Model<T> {
    [key: string]: T;
  }
  interface Colors {
    primary: string;
    success: string;
    warning: string;
    danger: string;
    info: string;
    red: Model<string>;
    dark: Model<string>;
    gray: Model<string>;
  }
  export interface Theme {
    container: string;
    colors: Colors;
    spacing: Model<string>;
    fontFamily: Model<string>;
    fontSize: Model<string>;
    fontWeight: Model<number>;
    zIndex: Model<number>;
    borderRadius: Model<string>;
    boxShadow: Model<string>;
  }
}
