import { Theme, css } from '@emotion/react';

export const circleButtonStyle = ({ colors, spacing, borderRadius }: Theme) =>
  css({
    cursor: 'pointer',
    color: colors?.red[100],
    width: spacing?.[10],
    height: spacing?.[10],
    borderRadius: borderRadius?.full,
    backgroundImage: 'var(--background-gradient)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  });
