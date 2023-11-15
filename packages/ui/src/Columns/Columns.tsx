import * as React from "react";
import { Divider } from "../Divider";
import type {
  CSS,
  ThemeBreakPoints,
  ThemeSpace,
} from "../theme/stitches.config";
import flattenFragments from "../utils/flattenFragments";
import * as Styled from "./Columns.styles";

/**
 * This component uses `React.children.map` in order to support `dividers` being
 * dynamically added between each child element. The question of "why" comes up
 * enough that I'm documenting it here.
 *
 * One goal of this component is for the user to be able to set a `divider` prop,
 * and have themed dividers added between each child element.
 *
 * If you want to add dividers between each element, you need to create a DOM
 * element. A common CSS way of achieving extra elements is with pseudo-elements,
 * but a pseudo-element (e.g. ::before, ::after) is a child of the element it is
 * set on. We want our dividers to be part of our flex container, so that they
 * can be aligned between the gaps, and alternate automatically between vertical
 * and horizontal dividers depending on the flex direction.
 *
 * Pseudo-elements won't cut it because we can only have a couple on the flex parent.
 * If we put them on each child, they are not part of the `Columns` flex container
 * anymore, as well as not being able to be placed outside the child element.
 *
 * Some UI libraries use internal padding and absolute positioning to achieve dividers
 * with pseudo-elements, but I wanted to stick with `gap` and flexbox.
 *
 * This decision is not without tradeoffs, such as having to use `flattenFragments` in
 * order to handle `React.children.map` treating a fragment with children as a single
 * child, and not iterating over the children of the fragment.
 *
 * After having tried various methods and looking through dozens of UI libraries,
 * I think the simplicity and flexibility of this method's output is worth the tradeoff.
 * Some future flexibility examples are that we can add the ability to pass a custom
 * divider at some point, or use `border-image: linear-gradient` for gradient dividers.
 */

type ColumnedAbove = ThemeBreakPoints | "never";

export interface ColumnsProps {
  as?: React.ElementType;
  css?: CSS;
  children: React.ReactNode;
  space?: ThemeSpace;
  collapsedSpace?: ThemeSpace;
  alignY?: "top" | "center" | "bottom";
  alignX?: "left" | "center" | "right";
  equalHeight?: boolean;
  reversed?: boolean;
  columnedAbove?: ColumnedAbove;
  dividers?: "light" | "heavy";
}

export function createEnabledBpObject(bp: ColumnedAbove) {
  const enabledAtBp: Styled.ColumnsStyleProps["enabled"] = {
    "@initial": false,
  };

  if (bp !== "never") {
    enabledAtBp[`@${bp}`] = true;
  }

  return enabledAtBp;
}

const Columns = ({
  children,
  as,
  css,
  space = "00",
  alignY,
  alignX = "center",
  equalHeight,
  reversed,
  columnedAbove,
  collapsedSpace,
  dividers,
}: ColumnsProps) => {
  const columnsChildren = flattenFragments(children);

  const collapsedGap = collapsedSpace || space;
  const enabled = columnedAbove ? createEnabledBpObject(columnedAbove) : true;

  return (
    <Styled.Columns
      as={as}
      css={css}
      space={space}
      alignY={alignY}
      alignX={alignX}
      equalHeight={equalHeight}
      reversed={reversed}
      collapsedGap={collapsedGap}
      enabled={enabled}
    >
      {React.Children.map(columnsChildren, (child, index) => {
        // Without this check a divider will still be rendered if the child is nullish.
        if (!React.isValidElement(child)) {
          return child;
        }

        /**
         * The first child should not have a divider above it when stacked vertically,
         * or to the left of it when horizontally laid out.
         *
         * We can also just return the child element if no dividers are desired.
         */
        if (index === 0 || !dividers) {
          return child;
        }

        return (
          <>
            <Divider thickness={dividers} />
            {child}
          </>
        );
      })}
    </Styled.Columns>
  );
};

export default Columns;
