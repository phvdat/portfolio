import { css, Theme } from '@emotion/react';
import { media } from 'style/responsive-helper';

export const headerStyle = {
  self: ({ spacing }: Theme) =>
    css({
      top: 0,
      width: '100%',
      height: 'var(--height-header)',
      backdropFilter: 'blur(15px)',
      boxShadow: 'var(--box-shadow-header)',
      position: 'sticky',
      padding: `0 ${spacing?.[9]}`,
      backgroundColor: 'var(--background-primary)',
      [media('md')]: {
        height: 'var(--height-header-mobile)',
        padding: `0 ${spacing?.[4]}`
      }
    }),

  wrapper: css({
    height: '100%',
    maxWidth: 'var(--container-area-default-layout)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }),

  container: ({ spacing }: Theme) =>
    css({
      display: 'flex',
      gap: spacing[7],
      alignItems: 'center'
    }),

  menu: css({
    [media('md')]: {
      display: 'none'
    }
  }),
  item: ({ fontSize, spacing, fontWeight, colors }: Theme) =>
    css({
      marginLeft: spacing?.[10],
      span: {
        fontWeight: fontWeight.primary,
        fontSize: fontSize?.xs,
        ':hover': {
          color: colors?.red?.[100]
        }
      },
      '&.active': {
        '>span': {
          color: 'var(--text-secondary)',
          fontWeight: fontWeight.secondary
        }
      }
    }),
  menuIcon: ({ colors, spacing, borderRadius }: Theme) =>
    css({
      cursor: 'pointer',
      color: colors?.red[100],
      width: spacing?.[10],
      height: spacing?.[10],
      borderRadius: borderRadius?.full,
      backgroundImage: 'var(--background-gradient)',
      display: 'none',
      alignItems: 'center',
      justifyContent: 'center',
      [media('md')]: {
        display: 'flex'
      }
    })
};
