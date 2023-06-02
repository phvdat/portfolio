import { Theme, css } from '@emotion/react';
import { media } from 'style/responsive-helper';
const SIDEBAR_WIDTH_TABLET = '380px';
const SIDEBAR_WIDTH_MOBILE = '310px';
export const sidebarStyle = {
  container: ({ zIndex, colors }: Theme) =>
    css({
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      zIndex: zIndex?.backdrop,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      visibility: 'hidden',
      opacity: 0,
      transition: 'opacity 0.6s ease-out',
      '&[aria-expanded="true"]': {
        visibility: 'visible',
        opacity: 1
      }
    }),

  openSidebar: css({
    visibility: 'visible',
    opacity: 1,
    transition: 'opacity 0.4s ease-out'
  }),

  self: ({ spacing }: Theme) =>
    css({
      transform: 'translateX(-200px)',
      padding: `${spacing?.[6]} ${spacing?.[7]}`,
      width: SIDEBAR_WIDTH_TABLET,
      height: '100vh',
      backgroundColor: 'var(--background-secondary)',
      transition: 'all 0.6s ease-out',
      [media('sm')]: {
        width: SIDEBAR_WIDTH_MOBILE
      },
      '&[aria-expanded="true"]': {
        transform: 'translateX(0px)'
      }
    }),
  header: ({ spacing }: Theme) => css({}),
  avatarContainer: css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }),
  menu: ({ spacing }: Theme) => css({}),
  footer: ({ spacing }: Theme) => css({}),
  item: css({})
};
