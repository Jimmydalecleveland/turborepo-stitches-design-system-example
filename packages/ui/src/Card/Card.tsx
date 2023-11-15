import { Box, type BoxProps } from "../Box";
import type { CSS, ThemeShadows } from "../theme/stitches.config";
import CardHeader from "./compounds/CardHeader";

export interface CardProps {
  css?: CSS;
  children?: React.ReactNode;
  prominent?: boolean;
  shadow?: ThemeShadows;
  spaceSize?: "small" | "medium" | "large";
  corners?: BoxProps["corners"];
  headerContent?: React.ReactNode;
}

const paddingMap = {
  small: { "@initial": "04" },
  medium: { "@initial": "04", "@bp2": "06" },
  large: { "@initial": "06", "@bp2": "07" },
};

const cornersMap: BoxProps["corners"] = {
  small: "rounder",
  medium: "rounder",
  large: "roundest",
};

const Card = ({
  css,
  children,
  prominent,
  shadow = "low",
  spaceSize = "large",
  corners,
  headerContent,
}: CardProps) => {
  const derivedCorners = corners || cornersMap[spaceSize];

  return (
    <Box vibe="neutral" corners={derivedCorners} shadow={shadow} css={css}>
      {headerContent ? <Box
          as="header"
          vibe={prominent ? "neutralInverse" : "disabled"}
          paddingY="04"
          paddingX={paddingMap[spaceSize]}
          cornersTop={derivedCorners}
        >
          {headerContent}
        </Box> : null}
      <Box padding={paddingMap[spaceSize]} cornersBottom={derivedCorners}>
        {children}
      </Box>
    </Box>
  );
};

/**
 * NOTE: I doubt we'll need `forwardRef` for this but if we do there is a
 * GitHub issue: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/34757
 */
Card.Header = CardHeader;

export default Card;
