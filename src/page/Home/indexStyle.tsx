import { Theme, css, keyframes } from '@emotion/react';
import { media } from 'style/responsive-helper';
const WIDTH_PROFILE_IMAGE = '400px';

const typing = keyframes`
	50% {
    max-width: 100%;
  }
 	100% {
    max-width: 0%;
  }

`;

export const homePageStyle = {
  self: ({ spacing }: Theme) =>
    css({
      paddingTop: spacing?.[7],
      display: 'flex',
      justifyContent: 'space-between',
      minHeight: 'calc(100vh - var(--height-header))',
      alignItems: 'center',
      [media('lg')]: {
        flexDirection: 'column-reverse'
      }
    }),

  information: css({
    flex: 1,
    maxWidth: '750px'
  }),

  title: ({ fontSize, fontWeight, spacing }: Theme) =>
    css({
      fontSize: fontSize?.sx,
      fontWeight: fontWeight?.secondary,
      width: '100%',
      marginBottom: spacing?.[9],
      [media('lg')]: {
        marginTop: spacing?.[9]
      }
    }),

  introduce: ({ fontSize, fontWeight, colors }: Theme) =>
    css({
      fontSize: fontSize?.xxxl,
      fontWeight: fontWeight?.tertiary,
      width: '100%',
      '> span:first-of-type': {
        color: colors?.red?.[100]
      },
      [media('xl')]: {
        fontSize: fontSize?.xl
      },
      [media('lg')]: {
        fontSize: fontSize?.lg
      }
    }),

  description: ({ spacing, fontSize }: Theme) =>
    css({
      marginTop: spacing?.[9],
      fontSize: fontSize?.sm
    }),

  subText: ({ colors }: Theme) =>
    css({
      verticalAlign: 'bottom',
      maxWidth: '0%',
      overflowX: 'hidden',
      whiteSpace: 'nowrap',
      animation: `${typing} 3s ease-out infinite`,
      position: 'relative',
      transition: 'all 1s ease-out',
      '&::after': {
        content: "''",
        position: 'absolute',
        top: '50%',
        right: '0px',
        width: '2px',
        height: '80%',
        backgroundColor: colors?.red?.[100],
        transform: 'translateY(-50%)'
      },
      '&[aria-hidden="true"]': {
        display: 'none'
      }
    }),

  socialAndSkill: ({ spacing }: Theme) =>
    css({
      display: 'flex',
      marginTop: spacing?.[12],
      gap: spacing?.[12],
      [media('lg')]: {
        gap: spacing?.[7],
        flexDirection: 'column'
      }
    }),
  bestSkill: ({ fontSize, fontWeight, spacing }: Theme) =>
    css({
      '> span': {
        fontSize: fontSize?.xs,
        fontWeight: fontWeight?.secondary,
        marginBottom: spacing?.[7]
      }
    }),
  picture: ({ borderRadius }: Theme) =>
    css({
      boxShadow: 'var(--box-shadow-md)',
      borderRadius: borderRadius?.md,
      img: {
        maxWidth: WIDTH_PROFILE_IMAGE,
        width: '100%',
        objectFit: 'contain',
        borderRadius: borderRadius?.md,
        verticalAlign: 'bottom',
        [media('lg')]: {
          maxWidth: '100%'
        }
      }
    })
};
