import { Theme, css } from "@emotion/react";
import { media } from "style/responsive-helper";
const WIDTH_PROFILE_IMAGE = "400px";

export const homePageStyle = {
  self: ({ spacing }: Theme) =>
    css({
      paddingTop: spacing?.[7],
      display: "flex",
      minHeight: "calc(100vh - var(--height-header))",
      alignItems: "center",
      [media("lg")]: {
        flexDirection: "column-reverse",
      },
    }),

  information: css({
    flex: 1,
  }),
  title: ({ fontSize, fontWeight, spacing }: Theme) =>
    css({
      fontSize: fontSize?.sx,
      fontWeight: fontWeight?.secondary,
      width: "100%",
      marginBottom: spacing?.[9],
    }),
  description: ({ fontSize, fontWeight, colors }: Theme) =>
    css({
      fontSize: fontSize?.xxxl,
      fontWeight: fontWeight?.tertiary,
      width: "100%",
      "> span:first-of-type": {
        color: colors?.red?.[100],
      },
      [media("xl")]: {
        fontSize: fontSize?.xl,
      },
      [media("lg")]: {
        fontSize: fontSize?.lg,
      },
    }),

  subText: css({
    transition: "all 1s ease-out",
    overflow: "hidden",
    '&[aria-hidden="true"]': {
      display: "none",
    },
  }),

  picture: ({ borderRadius }: Theme) =>
    css({
      boxShadow: "var(--box-shadow-md)",
      borderRadius: borderRadius?.md,
      img: {
        maxWidth: WIDTH_PROFILE_IMAGE,
        width: "100%",
        objectFit: "contain",
        borderRadius: borderRadius?.md,
        verticalAlign: "bottom",
        [media("lg")]: {
          maxWidth: "100%",
        },
      },
    }),
};
