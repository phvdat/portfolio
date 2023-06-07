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
  tab: ({ borderRadius, spacing }: Theme) =>
    css({
      borderRadius: borderRadius?.md,
      display: 'flex',
      boxShadow: 'var(--box-shadow-lg)',
      '> li': {
        flex: 1,
        paddingTop: spacing?.[9],
        paddingBottom: spacing?.[9],
        textAlign: 'center',
        cursor: 'pointer',
        '&[data-active-tab="true"]': {
          borderRadius: borderRadius?.md,
          boxShadow: 'var(--box-shadow-lg)'
        }
      }
    })
};
