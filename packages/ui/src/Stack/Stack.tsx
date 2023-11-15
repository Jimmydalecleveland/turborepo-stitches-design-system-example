import * as React from "react";
import flattenFragments from "../utils/flattenFragments";
import type { Align } from "../Box";
import { Box } from "../Box";
import { Divider, type DividerProps } from "../Divider";
import type { CSS, ThemeSpace } from "../theme/stitches.config";
import * as Styled from "./Stack.styles";

// This is specifically to accommodate Storybook, so it can know the correct props.
export const stackAlign = [
  "left",
  "center",
  "right",
  "stretch",
  "baseline",
] as const;
export type StackAlign = (typeof stackAlign)[number];

const alignMap: Record<StackAlign, Align> = {
  left: "flexStart",
  center: "center",
  right: "flexEnd",
  stretch: "stretch",
  baseline: "baseline",
};

export interface StackProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  css?: CSS;
  children: React.ReactNode;
  space?: ThemeSpace;
  align?: StackAlign;
  dividers?: DividerProps["thickness"];
}

interface StackDividerProps {
  shouldRender?: boolean | null;
  space?: ThemeSpace;
  thickness?: StackProps["dividers"];
}

const StackDivider = ({
  shouldRender,
  space,
  thickness,
}: StackDividerProps) => {
  if (!shouldRender) {
    return null;
  }

  return (
    <Box paddingBottom={space} fullWidth>
      <Divider thickness={thickness} />
    </Box>
  );
};

const Stack = ({
  as,
  css,
  children,
  space = "00",
  align,
  dividers,
  ...otherProps
}: StackProps) => {
  const stackItems = flattenFragments(children);
  const isList = as === "ul" || as === "ol";

  return (
    <Styled.Stack {...otherProps} as={as} css={css} space={space} align={align}>
      {React.Children.map(stackItems, (child, index) => {
        // Without this check a divider will still be rendered if the child is nullish.
        if (!child) {
          return null;
        }

        return align ? (
          <Box
            as={isList ? "li" : "div"}
            display="flex"
            flexDirection="column"
            paddingTop={space}
            alignItems={alignMap[align]}
          >
            {/* If dividers are enabled, create a hr between each child,
             * except for the first child.
             *
             * It's possible to do this with CSS, but it's trickier than it seems,
             * and we'd rather just not render the element if we can.
             */}
            <StackDivider
              shouldRender={dividers ? index !== 0 : null}
              space={space}
              thickness={dividers}
            />
            {child}
          </Box>
        ) : (
          <Box as={isList ? "li" : "div"} paddingTop={space}>
            <StackDivider
              shouldRender={dividers ? index !== 0 : null}
              space={space}
              thickness={dividers}
            />
            {child}
          </Box>
        );
      })}
    </Styled.Stack>
  );
};

export default Stack;
