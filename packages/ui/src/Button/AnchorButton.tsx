import * as React from "react";
import { Inline } from "../Inline";
import * as Styled from "./Button.styles";
import type { BaseButtonProps } from "./types";
import { buttonToIconSizeMap } from "./types";

export interface AnchorButtonProps
  extends BaseButtonProps,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const AnchorButton = React.forwardRef<HTMLAnchorElement, AnchorButtonProps>(
  function AnchorButtonWithRef(
    {
      css,
      children,
      tabIndex = 0,
      vibe = "neutral",
      variant = "solid",
      href,
      size = "medium",
      corners = "round",
      shadow,
      LeftIcon,
      RightIcon,
      onClick,
      isFullWidth,
      ...otherProps
    },
    ref,
  ) {
    return (
      <Styled.Button
        ref={ref}
        {...otherProps}
        as="a"
        href={href}
        css={css}
        tabIndex={tabIndex}
        vibe={vibe}
        variant={variant}
        size={size}
        corners={corners}
        shadow={shadow}
        onClick={onClick}
        isFullWidth={isFullWidth}
      >
        <Inline space="02" alignX="center">
          {LeftIcon ? (
            <LeftIcon vibe={vibe} size={buttonToIconSizeMap[size]} />
          ) : null}
          {children}
          {RightIcon ? (
            <RightIcon vibe={vibe} size={buttonToIconSizeMap[size]} />
          ) : null}
        </Inline>
      </Styled.Button>
    );
  },
);

export default AnchorButton;
