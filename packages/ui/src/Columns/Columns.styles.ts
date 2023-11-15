import type { VariantProps } from "@stitches/react";
import { baseBox } from "../Box/Box.styles";
import { styled } from "../theme/stitches.config";
import { getAllSpacingVariants } from "../theme/utils";

const getSizeStyle = (scale: number): { flex: string; width: string } => ({
  /**
   * If `flex-shrink` is set to 0, any `gap` will cause overflow
   * because the column will not yield any width.
   * e.g. 1/2 column + 1/2 column + 10px gutter would overflow 10px.
   */
  flex: `0 1 ${scale * 100}%`,
  width: "100%",
});

export const Column = styled("div", baseBox, {
  minWidth: "0%",

  variants: {
    width: {
      content: {
        flex: "initial",
        flexShrink: 0,
        width: "initial",
      },
      fluid: {
        flex: 1,
        /**
         * It is important that `width` is used here, rather
         * than `flex-basis`. `flex-basis` has a higher priority
         * than `width` and we need fluid columns to yield to
         * fixed size columns (1/3, 1/2, etc.) so they get their
         * appropriate widths.
         */
        width: "100%",
      },
      half: getSizeStyle(1 / 2),
      third: getSizeStyle(1 / 3),
      twoThirds: getSizeStyle(2 / 3),
      oneFourth: getSizeStyle(1 / 4),
      threeFourths: getSizeStyle(3 / 4),
      oneFifth: getSizeStyle(1 / 5),
      twoFifths: getSizeStyle(2 / 5),
      threeFifths: getSizeStyle(3 / 5),
      fourFifths: getSizeStyle(4 / 5),
    },
  },
});

const space = getAllSpacingVariants((val) => ({
  columnGap: val,
}));

const collapsedGap = getAllSpacingVariants((val) => ({
  rowGap: val,
}));

export const Columns = styled("div", baseBox, {
  display: "flex",
  flexDirection: "column",

  variants: {
    enabled: {
      true: {
        flexDirection: "row",
      },
    },
    alignY: {
      center: {
        alignItems: "center",
      },
      top: {
        alignItems: "flex-start",
      },
      bottom: {
        alignItems: "flex-end",
      },
    },
    alignX: {
      center: {
        justifyContent: "center",
      },
      left: {
        justifyContent: "flex-start",
      },
      right: {
        justifyContent: "flex-end",
      },
    },
    // We don't want to apply this unless `enabled` is true, but types require it.
    reversed: { true: {} },
    equalHeight: {
      true: {
        alignItems: "stretch",

        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions -- This is valid in Stitches, and the error doesn't give me enough info to determine what to correct.
        [`& > ${Column} > *`]: {
          height: "100%",
        },
      },
    },
    collapsedGap,
    space,
  },

  compoundVariants: [
    {
      /**
       * To avoid specificity issues, we only want to apply row-reverse
       * when columns are enabled (flex-direction: row)
       * */
      enabled: "true",
      reversed: "true",
      css: {
        flexDirection: "row-reverse",
      },
    },
  ],
});

export type ColumnsStyleProps = VariantProps<typeof Columns>;
