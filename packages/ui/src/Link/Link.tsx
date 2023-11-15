import type { IconProps } from "../Icon";
import type {
  CSS,
  ThemeFontWeights,
  ThemeVibes,
} from "../theme/stitches.config";
import type { TextSize } from "../Text/Text";
import * as Styled from "./Link.styles";

// For reasoning on why we use anchors with icons instead of buttons
// as links, there are many articles on the web but eslint has a good start:
// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/bbae2c46ab4ae94122be6c898f2ef313c6154c27/docs/rules/anchor-is-valid.md
export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  as?: React.ElementType;
  css?: CSS;
  children: React.ReactNode;
  LeftIcon?: React.ComponentType<IconProps>;
  RightIcon?: React.ComponentType<IconProps>;
  vibe?: Extract<ThemeVibes, "attract" | "neutralInverse">;
  size?: TextSize;
  weight?: ThemeFontWeights;
  italic?: boolean;
}

export const textToIconSizeMap: Record<TextSize, IconProps["size"]> = {
  xs: "tag",
  sm: "tag",
  md: "xs",
  lg: "sm",
  xl: "md",
};

const Link = ({
  as,
  css,
  children,
  href,
  size,
  weight,
  italic,
  LeftIcon,
  RightIcon,
  vibe = "attract",
  ...otherProps
}: LinkProps) => {
  return (
    <Styled.Link
      {...otherProps}
      vibe={vibe}
      as={as}
      css={css}
      href={href}
      size={size}
      weight={weight}
      italic={italic}
    >
      {LeftIcon ? (
        <LeftIcon vibe={vibe} size={textToIconSizeMap[size || "md"]} />
      ) : null}
      {children}
      {RightIcon ? (
        <RightIcon vibe={vibe} size={textToIconSizeMap[size || "md"]} />
      ) : null}
    </Styled.Link>
  );
};

export default Link;
