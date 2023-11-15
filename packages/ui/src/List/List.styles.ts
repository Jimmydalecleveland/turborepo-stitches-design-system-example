import { baseBox } from "../Box/Box.styles";
import { styled } from "../theme/stitches.config";
import { getAllSpacingVariants } from "../theme/utils";

const gap = getAllSpacingVariants((val) => ({
  gap: val,
}));

/**
 * The Stack component automatically renders a li element
 * when the as property is set to ol or ul.
 * This is the container inside the li.
 */
export const Item = styled("span", baseBox, {
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  alignItems: "center",

  variants: {
    gap,
  },
});

export const Bullet = styled("span", baseBox, {
  backgroundColor: "$textSubdued",
  width: "6px",
  height: "6px",
  borderRadius: "$full",
});
