import * as React from "react";
import { Inline } from "../Inline";
import { ChevronRight } from "../Icon";
import type { ThemeSpace } from "../theme/stitches.config";
import flattenFragments from "../utils/flattenFragments";

export interface BreadcrumbsProps {
  children: React.ReactNode;
  space?: ThemeSpace;
  size?: "sm" | "md" | "lg" | "xl" | "xs";
}

/**
 * Styles should come from each individual child component in order to make it possible to render a next/link, a Link component, Text, etc.
 * The size prop applies to the arrow icon only.
 */
const Breadcrumbs = ({
  children,
  space = "01",
  size = "xs",
}: BreadcrumbsProps) => {
  const breadcrumbsChildren = flattenFragments(
    React.Children.toArray(children),
  );

  return (
    <Inline space={space} role="navigation" aria-label="breadcrumbs">
      {breadcrumbsChildren.map((child, index) => {
        // Don't render anything if the child is not an element.
        if (!React.isValidElement(child)) return null;

        const isLast = index === breadcrumbsChildren.length - 1;
        return (
          <React.Fragment key={child.key}>
            {child}
            {!isLast && <ChevronRight vibe="disabled" size={size} />}
          </React.Fragment>
        );
      })}
    </Inline>
  );
};

export default Breadcrumbs;
