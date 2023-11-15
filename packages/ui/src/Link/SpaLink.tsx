import * as React from "react";
import * as Styled from "./Link.styles";
import { type LinkProps, textToIconSizeMap } from "./Link";

// For reasoning on why we use anchors with icons instead of buttons
// as links, there are many articles on the web but eslint has a good start:
// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/bbae2c46ab4ae94122be6c898f2ef313c6154c27/docs/rules/anchor-is-valid.md
export interface SpaLinkProps
  extends LinkProps,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

const SpaLink = React.forwardRef<HTMLAnchorElement, SpaLinkProps>(function Link(
  {
    onClick,
    as,
    css,
    children,
    href,
    size,
    weight,
    LeftIcon,
    RightIcon,
    vibe = "attract",
    ...otherProps
  },
  ref,
) {
  return (
    <Styled.Link
      {...otherProps}
      as={as}
      css={css}
      href={href}
      ref={ref}
      onClick={onClick}
      vibe={vibe}
      size={size}
      weight={weight}
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
});

export default SpaLink;
