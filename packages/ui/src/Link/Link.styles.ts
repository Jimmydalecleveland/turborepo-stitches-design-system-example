import { styled } from "../theme/stitches.config";

export const Link = styled("a", {
  display: "inline-flex",
  gap: "$02",
  alignItems: "center",
  fontWeight: "$medium",

  variants: {
    vibe: {
      attract: {
        color: "$link",
        textDecoration: "none",

        "&:hover": {
          textDecoration: "underline",
        },
        "&:visited": {
          color: "$linkVisited",
        },
      },
      neutralInverse: {
        color: "$linkNeutralInverse",

        textDecoration: "underline",
        "&:visited": {
          color: "$linkNeutralInverse",
        },
      },
    },
    size: {
      xs: {
        fz: "xs",
      },
      sm: {
        fz: "sm",
      },
      md: {
        fz: "md",
      },
      lg: {
        fz: "lg",
      },
      xl: {
        fz: "xl",
      },
    },
    weight: {
      light: {
        fontWeight: "$light",
      },
      regular: {
        fontWeight: "$regular",
      },
      medium: {
        fontWeight: "$medium",
      },
      bold: {
        fontWeight: "$bold",
      },
      heavy: {
        fontWeight: "$heavy",
      },
    },
    italic: {
      true: {
        fontStyle: "italic",
      },
    },
  },
});
