import { css, Theme } from '@emotion/react';

export const root = css`
  :root {
    --height-header: 90px;
    --height-header-mobile: 70px;
    --width-sidebar: 305px;
    --container-area-default-layout: 1320px;
  }
`;

export const themeLight = css`
  body[data-theme='light'] {
    --background-primary: #ecf0f3;
    --background-secondary: #eff2f4;
    --background-tertiary: #dadee2;
    --background-gradient: linear-gradient(
      145deg,
      rgb(226, 232, 236),
      rgb(255, 255, 255)
    );
    --background-header: rgba(236, 240, 243, 0.9);
    --background-linear: linear-gradient(145deg, #e2e8ec, #f6f2f6);
    --background-card: linear-gradient(145deg, #6a67ce, #fc636b);

    --text-primary: #3c3e41;
    --text-secondary: #000000;
    --text-tertiary: rgb(60, 62, 65);

    --box-shadow-header: 10px 10px 19px rgba(0, 0, 0, 0.1);
    --box-shadow-md: 0px 0px 18px rgba(0, 0, 0, 0.3);
    --box-shadow-lg: 5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff;

    --border-color: #cad0d5;
    --horizontal: #dde1e4;
  }
`;

export const themeDark = css`
  body[data-theme='dark'] {
    --background-primary: #212428;
    --background-secondary: #191b1e;
    --background-tertiary: #17191c;
    --background-gradient: linear-gradient(
      145deg,
      rgb(25, 28, 31),
      rgb(30, 34, 38)
    );
    --background-header: rgba(33, 36, 40, 0.9);
    --background-linear: linear-gradient(145deg, #1e2024, #23272b);
    --background-card: linear-gradient(145deg, #2c3333, #1f1d36);

    --text-primary: #c6cfdd;
    --text-secondary: #ffffff;
    --text-tertiary: rgb(135, 142, 153);

    --box-shadow-header: 10px 10px 19px #1c1e22, -10px -10px 19px #262a2e;
    --box-shadow-md: 0px 0px 18px rgba(136, 140, 143, 0.3);
    --box-shadow-lg: 10px 10px 10px #1c1e22, -10px -10px 10px #262a2e;

    --border-color: #2e3337;
    --horizontal: #303235;
  }
`;

export const theme = {
  container: '1280px',
  colors: {
    primary: '#FACC15',
    success: '#22C55E',
    warning: '#FF9800',
    danger: '#EF4444',
    info: '#2196F3',
    red: {
      100: '#e82650'
    },
    dark: {
      100: '#171717'
    },
    gray: {
      100: '#646669',
      200: '#E7E7E7'
    }
  },
  spacing: {
    1: '2px',
    2: '4px',
    3: '8px',
    4: '12px',
    5: '16px',
    6: '20px',
    7: '24px',
    8: '32px',
    9: '36px',
    10: '48px',
    11: '64px',
    12: '80px',
    13: '160px',
    14: '200px'
  },
  fontFamily: {
    primary: 'Roboto, sans-serif',
    secondary: 'Tahoma'
  },
  fontSize: {
    xs: '1.4rem',
    sm: '1.6rem',
    md: '2rem',
    lg: '2.4rem',
    xl: '3.6rem',
    xxl: '4.8rem',
    xxxl: '6rem'
  },
  fontWeight: {
    primary: 400,
    secondary: 500,
    tertiary: 700
  },
  zIndex: {
    header: 100,
    backdrop: 120
  },

  borderRadius: {
    sm: '4px',
    md: '8px',
    full: '50%'
  },

  boxShadow: {
    sm: '4px 4px 10px rgba(0, 0, 0, 0.04)',
    md: '0px 0px 8px rgba(0, 0, 0, 0.08)'
  }
} as Theme;
