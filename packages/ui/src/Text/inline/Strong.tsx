import type { TextProps } from "../Text";
import Text from "../Text";

/**
 * Should I use `<B>` or `<Strong>`?
 * Here is a quote from MDN:
 * The <strong> element is for content that is of greater importance,
 * while the <b> element is used to draw attention to text without indicating
 * that it's more important.
 */
export type StrongProps = Omit<
  TextProps,
  "as" | "display" | "weight" | "align"
>;

const Strong = ({
  css,
  children,
  vibe,
  size,
  italic,
  decoration,
}: StrongProps) => {
  return (
    <Text
      as="strong"
      css={css}
      display="inline"
      weight="bold"
      vibe={vibe}
      size={size}
      italic={italic}
      decoration={decoration}
    >
      {children}
    </Text>
  );
};

export default Strong;
