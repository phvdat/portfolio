import { Theme, css } from '@emotion/react';

export const featurePageStyle = {
  self: ({ spacing }: Theme) =>
    css({
      paddingTop: spacing?.[7],
      paddingBottom: spacing?.[8]
    }),
  title: css({})
};
