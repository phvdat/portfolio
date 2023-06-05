import { Theme, css } from "@emotion/react";

export const defaultLayoutStyle = {
  sefl: css({}),
  outlet: ({ spacing }: Theme) =>
    css({
      width: "100%",
      minHeight: "calc(100vh - var(--height-header))",
      marginTop: "var(--height-header)",
      padding: `0 5%`,
    }),
};
