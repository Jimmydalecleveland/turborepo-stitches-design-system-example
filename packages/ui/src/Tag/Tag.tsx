import { Inline } from "../Inline";
import { Text } from "../Text";
import type { ThemeVibes } from "../theme/stitches.config";
import type { IconProps } from "../Icon";
import { Box } from "../Box";

export interface TagProps {
  children: React.ReactNode;
  vibe?: ThemeVibes;
  LeftIcon?: React.ComponentType<IconProps>;
  RightIcon?: React.ComponentType<IconProps>;
}

const Tag = ({ children, vibe = "neutral", LeftIcon, RightIcon }: TagProps) => {
  return (
    <Box
      display="inlineBlock"
      paddingY="01"
      paddingX={children ? "03" : "01"}
      corners="full"
      vibe={vibe}
    >
      <Inline space="01">
        {LeftIcon ? <LeftIcon vibe={vibe} size="tag" /> : null}
        {children ? (
          <Text vibe={vibe} size="sm" weight="bold">
            {children}
          </Text>
        ) : null}
        {RightIcon ? <RightIcon vibe={vibe} size="tag" /> : null}
      </Inline>
    </Box>
  );
};

export default Tag;
