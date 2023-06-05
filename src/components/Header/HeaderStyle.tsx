import { css, Theme } from "@emotion/react";
import { media } from "style/responsive-helper";

export const headerStyle = {
  self: ({ spacing, zIndex }: Theme) =>
    css({
      top: 0,
      width: "100%",
      height: "var(--height-header)",
      backdropFilter: "blur(15px)",
      boxShadow: "var(--box-shadow-header)",
      position: "fixed",
      padding: `0 ${spacing?.[9]}`,
      margin: "auto",
      backgroundColor: "var(--background-header)",
      zIndex: zIndex?.header,
      [media("md")]: {
        height: "var(--height-header-mobile)",
        padding: `0 ${spacing?.[4]}`,
      },
    }),

  wrapper: css({
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }),

  container: ({ spacing }: Theme) =>
    css({
      display: "flex",
      gap: spacing[7],
      alignItems: "center",
    }),

  menu: ({ spacing }: Theme) =>
    css({
      display: "flex",
      [media("md")]: {
        display: "none",
      },
    }),
  item: ({ fontSize, spacing, fontWeight, colors }: Theme) =>
    css({
      marginLeft: spacing?.[10],
      span: {
        fontWeight: fontWeight.primary,
        fontSize: fontSize?.xs,
        ":hover": {
          color: colors?.red?.[100],
        },
      },
      "&.active": {
        ">span": {
          color: "var(--text-secondary)",
          fontWeight: fontWeight.secondary,
        },
      },
    }),
  menuIcon: ({ colors, spacing, borderRadius }: Theme) =>
    css({
      display: "none",
      [media("md")]: {
        display: "flex",
      },
    }),
};
