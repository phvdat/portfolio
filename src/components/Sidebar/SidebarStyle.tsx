import { Theme, css } from '@emotion/react';

export const sidebarStyle = {
  self: ({ spacing }: Theme) =>
    css({
      padding: `${spacing?.[6]} ${spacing?.[7]}`
    }),
  header: ({ spacing }: Theme) => css({}),
  menu: ({ spacing }: Theme) => css({}),
  footer: ({ spacing }: Theme) => css({}),
  item: css({})
};
