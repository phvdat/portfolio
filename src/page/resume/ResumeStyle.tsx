import { Theme, css } from '@emotion/react';
import { media } from 'style/responsive-helper';

export const resumeStyle = {
  self: ({ spacing }: Theme) =>
    css({
      paddingTop: spacing?.[7],
      paddingBottom: spacing?.[8]
    }),
  title: ({ fontWeight, fontSize, spacing }: Theme) =>
    css({
      fontSize: fontSize?.xxxl,
      fontWeight: fontWeight?.tertiary,
      textAlign: 'center',
      marginBottom: spacing?.[11]
    }),
  tab: ({ borderRadius, spacing, colors }: Theme) =>
    css({
      borderRadius: borderRadius?.md,
      display: 'flex',
      boxShadow: 'var(--box-shadow-lg)',
      background: 'var(--background-linear)',
      '> li': {
        flex: 1,
        paddingTop: spacing?.[9],
        paddingBottom: spacing?.[9],
        textAlign: 'center',
        cursor: 'pointer',
        [media('md')]: css({
          paddingTop: spacing?.[7],
          paddingBottom: spacing?.[7]
        }),
        '&[data-active-tab="true"]': {
          borderRadius: borderRadius?.md,
          boxShadow: 'var(--box-shadow-lg)',
          color: colors?.red?.[100]
        },
        ':hover': {
          borderRadius: borderRadius?.md,
          boxShadow: 'var(--box-shadow-lg)'
        }
      },
      [media('md')]: css({
        flexDirection: 'column'
      })
    }),
  container: ({ spacing }: Theme) =>
    css({
      marginTop: spacing?.[8],
      display: 'flex',
      gap: spacing?.[7],
      [media('md')]: css({
        flexDirection: 'column'
      })
    }),
  subTitle: ({ spacing }: Theme) =>
    css({
      marginBottom: spacing?.[10]
    })
};

export const listCardStyle = {
  self: ({ spacing }: Theme) =>
    css({
      gap: spacing?.[7],
      borderLeft: '6px solid',
      borderColor: 'var(--background-tertiary)',
      paddingLeft: spacing?.[8]
    }),

  item: ({ spacing }: Theme) =>
    css({
      marginBottom: spacing?.[9]
    }),

  card: ({ spacing, borderRadius, colors }: Theme) =>
    css({
      padding: spacing?.[7],
      boxShadow: 'var(--box-shadow-lg)',
      position: 'relative',
      borderRadius: borderRadius?.sm,
      opacity: 0.8,
      transition: 'background-image 0.9s ease',
      '::before': {
        content: '""',
        height: '6px',
        width: spacing?.[8],
        position: 'absolute',
        backgroundColor: 'var(--background-tertiary)',
        top: spacing?.[7],
        left: `-${spacing?.[8]}`
      },
      '::after': {
        transition: 'all 0.4s',
        content: '""',
        height: '10px',
        width: '10px',
        borderRadius: borderRadius?.full,
        position: 'absolute',
        boxShadow: '0 0 0 4px var(--background-tertiary)',
        backgroundColor: 'var(--background-primary)',
        top: '22px',
        left: `-40px`
      },
      '&:hover': {
        opacity: 1,
        backgroundImage: 'var(--background-card)',
        '::after': {
          backgroundColor: colors?.red?.[100]
        }
      }
    }),

  header: css({
    display: 'flex',
    justifyContent: 'space-between'
  }),

  score: ({ spacing, colors, fontSize }: Theme) =>
    css({
      height: spacing?.[6],
      padding: spacing?.[5],
      boxShadow: 'var(--box-shadow-md)',
      '> span': {
        color: colors?.red?.[100],
        fontSize: fontSize?.xs
      }
    }),

  titleCard: ({ fontSize, fontWeight }: Theme) =>
    css({
      fontSize: fontSize?.lg,
      fontWeight: fontWeight?.secondary
    }),

  subTitle: ({ fontSize, fontWeight, spacing }: Theme) =>
    css({
      marginTop: spacing?.[6],
      marginBottom: spacing?.[7],
      fontSize: fontSize?.xs,
      fontWeight: fontWeight?.default
    }),
  content: ({ fontSize, fontWeight, spacing }: Theme) =>
    css({
      marginTop: spacing?.[6],
      marginBottom: spacing?.[7],
      fontSize: fontSize?.xs,
      fontWeight: fontWeight?.default
    })
};
