import { Theme, css } from '@emotion/react';

export const defaultLayoutStyle = {
  sefl: css({}),
  outlet: ({ spacing }: Theme) =>
    css({
      maxWidth: 'var(--container-area-default-layout)',
      width: '100%',
      minHeight: 'calc(100vh - var(--height-header))',
      margin: 'auto',
      padding: `0 ${spacing?.[14]}`
    })
};
