import { styled } from "../theme/stitches.config";

export type OrdinalVariant = "primary" | "secondary";

export const Path = styled("path", {
  fill: "$ordinalThird",
  variants: {
    variant: {
      primary: {
        fill: "$ordinalFirst",
      },
      secondary: {
        fill: "$ordinalSecond",
      },
      tertiary: {},
    },
  },
});

export const Star = styled("svg", {
  width: "14px",

  variants: {
    starSize: {
      small: {
        width: "14px",
      },
      medium: {
        width: "18px",
      },
      large: {
        width: "24px",
      },
    },
  },
});

export const StarRating = styled("div", {
  display: "flex",
  gap: "$01",

  variants: {
    starSize: {
      small: {
        gap: "$01",
      },
      medium: {
        gap: "$01",
      },
      large: {
        gap: "$02",
      },
    },
  },
});
