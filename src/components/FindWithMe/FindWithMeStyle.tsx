import { Theme, css } from '@emotion/react';

export const findWithMeStyle = {
  self: ({ fontSize, fontWeight, spacing }: Theme) =>
    css({
      '> span': {
        fontSize: fontSize?.xs,
        fontWeight: fontWeight?.secondary,
        marginBottom: spacing?.[7],
      },
    }),
  socialList: ({ spacing }: Theme) =>
    css({
      display: 'flex',
      gap: spacing?.[7],
      flexWrap: 'wrap',
    }),
};
