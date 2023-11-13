import type { ThemeVibes } from "../theme/stitches.config";
import * as Styled from "./Icon.styles";

export interface SvgProps {
  children: React.ReactNode;
  vibe?: ThemeVibes;
  size?: "tag" | "xs" | "sm" | "md" | "lg" | "xl";
  background?: ThemeVibes;
}

export const Svg = ({
  children,
  vibe = "neutral",
  size = "sm",
  background,
}: SvgProps) => {
  const space = background && size;

  return (
    <Styled.Wrapper size={size} space={space} background={background}>
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
