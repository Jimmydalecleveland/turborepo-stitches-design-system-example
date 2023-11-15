import type * as React from "react";
import type { IconProps } from "../Icon";
import type { CSS, ThemeRadii, ThemeVibes } from "../theme/stitches.config";
import type { ButtonStyledProps } from "./Button.styles";

export type ButtonSize = "small" | "medium" | "large";

export interface BaseButtonProps {
  css?: CSS;
  vibe?: Extract<ThemeVibes, "attract" | "neutral">;
  variant?: "solid" | "hollow" | "link" | "unstyled";
  size?: ButtonSize;
  corners?: ThemeRadii;
  shadow?: boolean;
  isFullWidth?: ButtonStyledProps["isFullWidth"];
  LeftIcon?: React.ComponentType<IconProps>;
  RightIcon?: React.ComponentType<IconProps>;
}

export const buttonToIconSizeMap: Record<ButtonSize, IconProps["size"]> = {
  small: "xs",
  medium: "xs",
  large: "sm",
} as const;
