import { css, Theme } from '@emotion/react';
import { media } from 'style/responsive-helper';
const AVATAR_SIZE = '65px';
const AVATAR_SIZE_MOBILE = '50px';

export const avatarStyle = {
  self: ({ spacing }: Theme) =>
    css({
      display: 'flex',
      gap: spacing?.[3],
      alignItems: 'center'
    }),

  image: ({ borderRadius, colors }: Theme) =>
    css({
      borderRadius: borderRadius.full,
      width: AVATAR_SIZE,
      minWidth: AVATAR_SIZE,
      height: AVATAR_SIZE,
      objectFit: 'cover',
      border: '3px solid var(--border-color)',
      [media('md')]: {
        width: AVATAR_SIZE_MOBILE,
        minWidth: AVATAR_SIZE_MOBILE,
        height: AVATAR_SIZE_MOBILE
      }
    }),

  name: ({ fontSize }: Theme) =>
    css({
      fontSize: fontSize.md
    })
};
