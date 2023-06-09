import { Theme, css } from '@emotion/react';

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
        '&[data-active-tab="true"]': {
          borderRadius: borderRadius?.md,
          boxShadow: 'var(--box-shadow-lg)',
          color: colors?.red?.[100]
        },
        ':hover': {
          borderRadius: borderRadius?.md,
          boxShadow: 'var(--box-shadow-lg)'
        }
      }
    }),
  container: css({})
};

export const listCardStyle = {
  self: ({ spacing }: Theme) =>
    css({
      paddingTop: spacing?.[7],
      paddingBottom: spacing?.[8]
    }),

  card: ({ spacing }: Theme) =>
    css({
      paddingTop: spacing?.[7],
      paddingBottom: spacing?.[8]
    })
};
