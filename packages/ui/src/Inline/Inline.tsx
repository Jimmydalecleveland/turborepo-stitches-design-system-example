import type { CSS } from "../theme/stitches.config";
import * as Styled from "./Inline.styles";

export interface InlineProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  css?: CSS;
  children: React.ReactNode;
  space?: Styled.InlineStyledProps["space"];
  alignX?: Styled.InlineStyledProps["alignX"];
  alignY?: Styled.InlineStyledProps["alignY"];
}

const Inline = ({
  as,
  css,
  children,
  alignX,
  alignY = "center",
  space = "03",
  className,
  ...otherProps
}: InlineProps) => {
  return (
    <Styled.Inline
      as={as}
      css={css}
      alignX={alignX}
      alignY={alignY}
      space={space}
      className={className}
      {...otherProps}
    >
      {children}
    </Styled.Inline>
  );
};

export default Inline;
