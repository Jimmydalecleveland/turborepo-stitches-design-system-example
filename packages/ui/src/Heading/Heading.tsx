import type {
  CSS,
  ThemeFontWeights,
  ThemeVibes,
} from "../theme/stitches.config";
import * as Styled from "./Heading.styles";

type HeadingSizes = "h5" | "h4" | "h3" | "h2" | "h1" | "display" | "overline";

/**
 * Heading uses `size` to determine the font size and the html tag.
 * Sometimes you may want to change the html tag while use a different
 * font size. (e.g. `h3` styles for an `h5` element)
 * In this situation, `Component` can be passed to override the html tag.
 */
export interface HeadingProps {
  as?: "h5" | "h4" | "h3" | "h2" | "h1";
  css?: CSS;
  children: React.ReactNode;
  size?: HeadingSizes;
  weight?: ThemeFontWeights;
  align?: "left" | "center" | "right";
  decoration?: "strikethrough" | "underline";
  italic?: boolean;
  vibe?: Exclude<ThemeVibes, "info">;
}

const textSizeTagMap: Record<HeadingSizes, keyof React.JSX.IntrinsicElements> =
  {
    display: "h1",
    overline: "span",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
  } as const;

const Heading = ({
  as,
  css,
  children,
  size = "h3",
  weight,
  align,
  decoration,
  italic,
  vibe = "neutral",
}: HeadingProps) => {
  const possibleSizeTags = textSizeTagMap[size];
  const derivedTag = as || possibleSizeTags;
  return (
    <Styled.Heading
      as={derivedTag}
      css={css}
      size={size}
      weight={weight}
      align={align}
      decoration={decoration}
      italic={italic}
      vibe={vibe}
    >
      {children}
    </Styled.Heading>
  );
};

export default Heading;
