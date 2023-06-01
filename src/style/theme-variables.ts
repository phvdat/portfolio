import { css, Theme } from '@emotion/react';

export const root = css`
  :root {
    --height-header: 90px;
    --height-header-mobile: 70px;
    --width-sidebar: 305px;
    --container-area-default-layout: 1903px;
  }
`;

export const themeLight = css`
  body[data-theme='light'] {
    --background-primary: #ecf0f3;
    --background-secondary: rgb(244, 236, 228, 0.3);
    --background-third: #e7e7e7;
    --background-gradient: linear-gradient(
      145deg,
      rgb(226, 232, 236),
      rgb(255, 255, 255)
    );

    --text-primary: #3c3e41;
    --text-secondary: #000000;

    --box-shadow-header: 10px 10px 19px rgba(0, 0, 0, 0.1);
    --box-shadow-sm: 4px 4px 10px rgba(0, 0, 0, 0.04);
    --box-shadow-md: 0px 0px 8px rgba(0, 0, 0, 0.08);
    --box-shadow-lg: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.1));

    --border-color: #cad0d5;
  }
`;

export const themeDark = css`
  body[data-theme='dark'] {
    --background-primary: #202428;
    --background-secondary: #22303c;
    --background-third: #262626;
    --background-gradient: linear-gradient(
      145deg,
      rgb(25, 28, 31),
      rgb(30, 34, 38)
    );

    --text-primary: #c6cfdd;
    --text-secondary: #ffffff;

    --box-shadow-header: 10px 10px 19px #1c1e22, -10px -10px 19px #262a2e;
    --box-shadow-sm: 4px 4px 10px rgba(255, 255, 255, 0.04);
    --box-shadow-md: 0px 0px 8px rgba(255, 255, 255, 0.08);
    --box-shadow-lg: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.1));

    --border-color: #2e3337;
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
    xl: '4.8rem',
    '2xl': '6rem'
  },
  fontWeight: {
    primary: 400,
    secondary: 500,
    tertiary: 700
  },
  zIndex: {
    fab: 1050,
    drawer: 1200,
    dialog: 1300,
    tooltip: 1500,
    snackbar: 1400,
    backdrop: 1199
  },

  borderRadius: {
    sm: '4px',
    full: '50%'
  },

  boxShadow: {
    sm: '4px 4px 10px rgba(0, 0, 0, 0.04)',
    md: '0px 0px 8px rgba(0, 0, 0, 0.08)'
  }
} as Theme;
