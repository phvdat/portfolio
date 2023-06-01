import { css, Theme } from '@emotion/react';

export const darkModeButtonStyle = {
  self: css({
    height: '20px',
    display: 'inline-block',
    '#toggle-button': {
      display: 'none'
    },
    '#toggle-button:checked + label .switch-ball': {
      transform: 'translateX(20px)'
    }
  }),
  wrapper: css({
    display: 'inline-block',
    height: '20px',
    width: '50px',
    backgroundColor: '#abb4be',
    borderRadius: '10px',
    position: 'relative'
  }),
  ball: ({ colors }: Theme) =>
    css({
      cursor: 'pointer',
      width: '30px',
      height: '30px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '15px',
      backgroundColor: colors.red?.[100],
      position: 'absolute',
      bottom: '-5px',
      transition: 'transform 0.3s linear'
    })
};
