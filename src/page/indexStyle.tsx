import { Theme, css } from '@emotion/react';

export const indexStyle = {
  backToTopBtn: ({ spacing }: Theme) =>
    css({
      position: 'fixed',
      bottom: spacing?.[8],
      left: spacing?.[8],
      border: 'none',
      boxShadow: 'var(--box-shadow-lg)',
      background: 'transparent'
    })
};
