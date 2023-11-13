import type { CSS } from "../theme/stitches.config";
import { css, styled } from "../theme/stitches.config";
import {
  getAllBorderRadiiVariants,
  getAllSpacingVariants,
} from "../theme/utils";

export const baseBox = css({
  border: 0,
  padding: 0,
  margin: 0,
  boxSizing: "border-box",
});

export const Box = styled("div", baseBox, {
  variants: {
    display: {
      block: {
        display: "block",
      },
      inline: {
        display: "inline",
      },
      inlineBlock: {
        display: "inline-block",
      },
      flex: {
        display: "flex",
      },
      none: {
        display: "none",
      },
    },
    flexDirection: {
      row: {
        flexDirection: "row",
      },
      column: {
        flexDirection: "column",
      },
      rowReverse: {
        flexDirection: "row-reverse",
      },
      columnReverse: {
        flexDirection: "column-reverse",
      },
    },
    alignItems: {
      center: {
        alignItems: "center",
      },
      flexStart: {
        alignItems: "flex-start",
      },
      flexEnd: {
        alignItems: "flex-end",
      },
      baseline: {
        alignItems: "baseline",
      },
      stretch: {
        alignItems: "stretch",
      },
    },
    justifyContent: {
      center: {
        justifyContent: "center",
      },
      flexStart: {
        justifyContent: "flex-start",
      },
      flexEnd: {
        justifyContent: "flex-end",
      },
      spaceBetween: {
        justifyContent: "space-between",
      },
      spaceAround: {
        justifyContent: "space-around",
      },
    },
    corners: getAllBorderRadiiVariants(
      (val: string): CSS => ({
        borderRadius: val,
      }),
    ),
    cornersTop: getAllBorderRadiiVariants(
      (val: string): CSS => ({
        borderTopRightRadius: val,
        borderTopLeftRadius: val,
      }),
    ),
    cornersBottom: getAllBorderRadiiVariants(
      (val: string): CSS => ({
        borderBottomRightRadius: val,
        borderBottomLeftRadius: val,
      }),
    ),
    vibe: {
      subdued: {
        background: "$boxSubdued",
      },
      neutral: {
        background: "$boxNeutral",
      },
      neutralInverse: {
        background: "$boxNeutralInverse",
      },
      attract: {
        background: "$boxAttract",
      },
      positive: {
        background: "$boxPositive",
      },
      warning: {
        background: "$boxWarning",
      },
      critical: {
        background: "$boxCritical",
      },
      info: {
        background: "$boxInfo",
      },
      disabled: {
        background: "$boxDisabled",
      },
    },
    shadow: {
      none: {
        boxShadow: "$none",
      },
      low: {
        boxShadow: "$low",
      },
      medium: {
        boxShadow: "$medium",
      },
      high: {
        boxShadow: "$high",
      },
      highest: {
        boxShadow: "$highest",
      },
    },
    fullWidth: {
      true: {
        width: "100%",
      },
    },
    padding: getAllSpacingVariants((val: string) => ({
      padding: val,
    })),
    paddingX: getAllSpacingVariants((val: string) => ({
      paddingLeft: val,
      paddingRight: val,
    })),
    paddingY: getAllSpacingVariants((val: string) => ({
      paddingTop: val,
      paddingBottom: val,
    })),
    paddingTop: getAllSpacingVariants((val: string) => ({
      paddingTop: val,
    })),
    paddingBottom: getAllSpacingVariants((val: string) => ({
      paddingBottom: val,
    })),
    paddingLeft: getAllSpacingVariants((val: string) => ({
      paddingLeft: val,
    })),
    paddingRight: getAllSpacingVariants((val: string) => ({
      paddingRight: val,
    })),
  },
});

export type BoxStyledProps = React.ComponentProps<typeof Box>;
