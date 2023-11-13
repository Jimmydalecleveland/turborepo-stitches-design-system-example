import { baseBox } from "../Box/Box.styles";
import { styled } from "../theme/stitches.config";

export const Icon = styled("svg", baseBox, {
  fill: "none",
  strokeWidth: "2px",
  strokeLinecap: "round",
  strokeLinejoin: "round",

  // Safari, and iphone browsers masquerading as real browsers, fix
  width: "100%",
  height: "100%",

  variants: {
    vibe: {
      neutral: {
        stroke: "$iconStrokeNeutral",
      },
      neutralInverse: {
        stroke: "$iconStrokeNeutralInverse",
      },
      subdued: {
        stroke: "$iconStrokeSubdued",
      },
      attract: {
        stroke: "$iconStrokeAttract",
      },
      disabled: {
        stroke: "$iconStrokeDisabled",
      },
      positive: {
        stroke: "$iconStrokePositive",
      },
      warning: {
        stroke: "$iconStrokeWarning",
      },
      critical: {
        stroke: "$iconStrokeCritical",
      },
      info: {
        stroke: "$iconStrokeInfo",
      },
    },
  },
});

export const Wrapper = styled("span", baseBox, {
  borderRadius: "$full",
  display: "inline-flex",
  placeItems: "center",

  variants: {
    size: {
      tag: {
        width: "16px",
        height: "16px",
      },
      xs: {
        width: "20px",
        height: "20px",
      },
      sm: {
        width: "24px",
        height: "24px",
      },
      md: {
        width: "32px",
        height: "32px",
      },
      lg: {
        width: "40px",
        height: "40px",
      },
      xl: {
        width: "48px",
        height: "48px",
      },
    },
    space: {
      tag: {
        padding: "$00",
      },
      xs: {
        padding: "$01",
      },
      sm: {
        padding: "$01",
      },
      md: {
        padding: "$02",
      },
      lg: {
        padding: "$03",
      },
      xl: {
        padding: "$03",
      },
    },
    background: {
      neutral: {
        backgroundColor: "$iconBackgroundNeutral",
      },
      neutralInverse: {
        backgroundColor: "$iconBackgroundNeutralInverse",
      },
      subdued: {
        backgroundColor: "$iconBackgroundSubdued",
      },
      attract: {
        backgroundColor: "$iconBackgroundAttract",
      },
      disabled: {
        backgroundColor: "$iconBackgroundDisabled",
      },
      positive: {
        backgroundColor: "$iconBackgroundPositive",
      },
      warning: {
        backgroundColor: "$iconBackgroundWarning",
      },
      critical: {
        backgroundColor: "$iconBackgroundCritical",
      },
      info: {
        backgroundColor: "$iconBackgroundInfo",
      },
    },
  },
});
