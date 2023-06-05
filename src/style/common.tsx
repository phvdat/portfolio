import { Theme, css } from "@emotion/react";

export const circleButtonStyle = ({ colors, spacing, borderRadius }: Theme) =>
  css({
    cursor: "pointer",
    color: colors?.red[100],
    width: spacing?.[10],
    height: spacing?.[10],
    borderRadius: borderRadius?.full,
    backgroundImage: "var(--background-gradient)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

export const squareButtonStyle = ({ colors, spacing, borderRadius }: Theme) =>
  css({
    cursor: "pointer",
    color: colors?.red[100],
    width: spacing?.[10],
    height: spacing?.[10],
    borderRadius: borderRadius?.sm,
    backgroundImage: "var(--background-gradient)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.4s ease-out",
    ":hover": {
      transform: "translateY(-4px)",
    },
  });

export const horizontalLine = ({ colors, spacing, borderRadius }: Theme) =>
  css({
    "&::after": {
      content: '""',
      display: "block",
      width: "100%",
      height: "1px",
      backgroundColor: "var(--horizontal)",
    },
  });
