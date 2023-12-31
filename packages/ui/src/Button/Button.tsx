import * as React from "react";
import { Inline } from "../Inline";
import { type BaseButtonProps, buttonToIconSizeMap } from "./types";
import * as Styled from "./Button.styles";

export interface ButtonProps
  extends BaseButtonProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "button" | "submit";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function ButtonWithRef(
    {
      css,
      children,
      type = "button",
      tabIndex = 0,
      vibe = "neutral",
      variant = "solid",
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
        // I have read the full discussion on this lint rule here:
        // https://github.com/jsx-eslint/eslint-plugin-react/issues/1555
        // I don't fully understand the issue this rule is trying to solve,
        // but I believe the way we are handling it within TS is sufficient.
        type={type}
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

export default Button;
