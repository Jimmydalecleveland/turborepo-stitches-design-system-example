import { baseBox } from "../Box/Box.styles";
import { styled } from "../theme/stitches.config";

/**
 * `Divider` is a styled `hr` element that can be used anywhere for horizontal
 * dividers, but is only intended to be used as a direct child of `display: flex`
 * containers when vertical dividers are needed.
 *
 * This is because the `Divider` automatically switches its axis depending on
 * the parent's `flex-direction` property, and sets itself to `stretch`.
 *
 * According to MDN: The <hr> HTML element represents a thematic break between
 * paragraph-level elements: for example, a change of scene in a story, or a
 * shift of topic within a section.
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr
 *
 * Without another semantic tag for vertical dividers, this seems like the
 * most appropriate tag to me.
 */
export const Divider = styled("hr", baseBox, {
  borderStyle: "solid",
  /**
   * In case the flex parent sets `align-items` properties
   * that would shrink the divider, we set `stretch` so every
   * divider always takes up the full width of the parent.
   * */
  alignSelf: "stretch",

  variants: {
    thickness: {
      light: {
        /**
         * We use `border` instead of `height` and `background-color` here
         * because we want the divider to grow as a flex child and flip axis
         * depending on the parent's `flex-direction`.
         *
         * `width` and `height` would hard set their sizes, and we'd have to
         * determine which axis we are on to apply either property.
         *
         * The multiple values for `border-width` are to only set a single border
         * width/height for a direction. Otherwise, we'd get double the border size.
         */
        borderWidth: "$sm 0 0 $sm",
        borderColor: "$dividerDefault",
      },
      heavy: {
        borderWidth: "$md 0 0 $md",
        borderColor: "$dividerHeavy",
      },
    },
  },

  defaultVariants: {
    thickness: "light",
  },
});

export type DividerProps = React.ComponentProps<typeof Divider>;
