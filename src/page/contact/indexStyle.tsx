import { Theme, css } from '@emotion/react';

const LEFT_CONTENT_WIDTH = '430px';

export const contactStyle = {
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

  container: ({ spacing }: Theme) =>
    css({
      display: 'flex',
      gap: spacing?.[7]
    }),

  left: ({ spacing }: Theme) =>
    css({
      padding: spacing?.[7],
      width: '100%',
      maxWidth: LEFT_CONTENT_WIDTH
    }),

  name: ({ fontWeight, fontSize, spacing }: Theme) =>
    css({
      fontSize: fontSize?.lg,
      fontWeight: fontWeight?.secondary,
      marginTop: spacing?.[7]
    }),

  position: ({ fontWeight, fontSize, spacing }: Theme) =>
    css({
      fontSize: fontSize?.md,
      fontWeight: fontWeight?.primary,
      marginTop: spacing?.[6],
      color: 'var(--text-tertiary)'
    }),

  infoDescription: ({ fontWeight, fontSize, spacing }: Theme) =>
    css({
      fontSize: fontSize?.sm,
      fontWeight: fontWeight?.primary,
      marginTop: spacing?.[6]
    }),

  right: ({ fontWeight, fontSize, spacing }: Theme) =>
    css({
      display: 'flex'
    })
};
