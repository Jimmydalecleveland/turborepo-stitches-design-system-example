import { baseBox } from "../Box/Box.styles";
import { styled } from "../theme/stitches.config";
import { getAllSpacingVariants } from "../theme/utils";

const space = getAllSpacingVariants((val: string) => ({
  "&::before": {
    marginBottom: `-${val}`,
  },
}));

export const Stack = styled("div", baseBox, {
  "&::before": {
    display: "table",
    content: "",
  },

  variants: {
    space,
  },
});
