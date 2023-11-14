import type { ThemeVibes } from "../theme/stitches.config";
import * as Styled from "./Icon.styles";

export interface SvgProps {
  children: React.ReactNode;
  vibe?: ThemeVibes;
  size?: "tag" | "xs" | "sm" | "md" | "lg" | "xl";
  backgroundVibe?: ThemeVibes;
}

export type IconProps = Omit<SvgProps, "children">;

export const Svg = ({
  children,
  vibe = "neutral",
  size = "sm",
  backgroundVibe,
}: SvgProps) => {
  const space = backgroundVibe && size;

  return (
    <Styled.Wrapper size={size} space={space} background={backgroundVibe}>
      <Styled.Icon
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        vibe={vibe}
      >
        {children}
      </Styled.Icon>
    </Styled.Wrapper>
  );
};
