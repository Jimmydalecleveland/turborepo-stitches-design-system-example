import { baseBox } from "../Box/Box.styles";
import { styled } from "../theme/stitches.config";
import { getAllSpacingVariants } from "../theme/utils";

const space = getAllSpacingVariants((val) => ({
  gap: val,
}));

export const Inline = styled("div", baseBox, {
  display: "flex",
  flexWrap: "wrap",

  variants: {
    space,
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
      around: {
        justifyContent: "space-around",
      },
      between: {
        justifyContent: "space-between",
      },
      evenly: {
        justifyContent: "space-evenly",
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
  },
});

export type InlineStyledProps = React.ComponentProps<typeof Inline>;
