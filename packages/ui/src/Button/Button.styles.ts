/* eslint-disable @typescript-eslint/restrict-template-expressions -- This is valid in Stitches, and the error doesn't give me enough info to determine what to correct. */
import { baseBox } from "../Box/Box.styles";
import { Icon } from "../Icon/Icon.styles";
import type { CSS } from "../theme/stitches.config";
import { css, styled } from "../theme/stitches.config";
import { getAllBorderRadiiVariants } from "../theme/utils";

export const buttonLinkStyles = css(baseBox, {
  display: "inline-block",
  border: "none",
  borderRadius: "$rounder",
  boxShadow: "$md",
  fz: "md",
  fontWeight: "$medium",
  fontFamily: "$sans",
  textDecoration: "none",
  cursor: "pointer",

  variants: {
    size: {
      small: {
        padding: "$02 $04",
        fz: "sm",
      },
      medium: {
        padding: "$03 $05",
        fz: "md",
      },
      large: {
        padding: "$04 $06",
        fz: "lg",
      },
    },
    shadow: {
      true: {
        boxShadow: "$medium",
      },
    },
    corners: getAllBorderRadiiVariants(
      (val: string): CSS => ({
        borderRadius: val,
      }),
    ),
    vibe: {
      attract: {},
      neutral: {},
    },
    variant: {
      solid: {},
      hollow: {
        backgroundColor: "$actionHollowDefault",
      },
      link: {
        backgroundColor: "$actionLinkDefault",
        color: "$actionLinkText",
        padding: "$01 $00",
        borderRadius: "$sharp",
      },
      unstyled: {
        backgroundColor: "transparent",
        color: "inherit",
        border: 0,
        padding: 0,
      },
    },
    isFullWidth: {
      true: {
        width: "100%",
      },
      false: {
        width: "initial",
      },
    },
  },

  compoundVariants: [
    {
      vibe: "attract",
      variant: "solid",
      css: {
        color: "$actionAttractText",
        backgroundColor: "$actionAttractDefault",

        [`${Icon}`]: {
          stroke: "$actionAttractText",
        },

        "&:hover": {
          backgroundColor: "$actionAttractHovered",
        },
        "&:active": {
          backgroundColor: "$actionAttractFocused",
        },
        "&:focus": {
          backgroundColor: "$actionAttractFocused",
          outline: "solid 4px $attractFocus",
        },
        "&:disabled": {
          color: "$actionAttractDisabledText",
          backgroundColor: "$actionAttractDisabled",

          [`${Icon}`]: {
            stroke: "$actionAttractDisabledText",
          },
        },
      },
    },
    {
      vibe: "neutral",
      variant: "solid",
      css: {
        color: "$actionNeutralText",
        backgroundColor: "$actionNeutralDefault",

        [`${Icon}`]: {
          stroke: "$actionNeutralText",
        },

        "&:hover": {
          backgroundColor: "$actionNeutralHovered",
        },
        "&:active": {
          backgroundColor: "$actionNeutralFocused",
        },
        "&:focus": {
          backgroundColor: "$actionNeutralFocused",
          outline: "solid 4px $neutralFocus",
        },
        "&:disabled": {
          color: "$actionNeutralDisabledText",
          backgroundColor: "$actionNeutralDisabled",

          [`${Icon}`]: {
            stroke: "$actionNeutralDisabledText",
          },
        },
      },
    },
    {
      vibe: "neutral",
      variant: "hollow",
      css: {
        color: "$actionHollowText",
        boxShadow: "inset 0 0 0 1px $colors$actionNeutralDefault",

        [`${Icon}`]: {
          stroke: "$actionHollowText",
        },

        "&:hover": {
          backgroundColor: "$actionHollowHovered",
          color: "$actionHollowHoveredText",

          [`${Icon}`]: {
            stroke: "$actionHollowHoveredText",
          },
        },
        "&:active": {
          backgroundColor: "$actionHollowFocused",
          color: "$actionHollowFocusedText",

          [`${Icon}`]: {
            stroke: "$actionHollowFocusedText",
          },
        },
        "&:focus": {
          backgroundColor: "$actionHollowFocused",
          color: "$actionHollowFocusedText",
          outline: "solid 4px $neutralFocus",

          [`${Icon}`]: {
            stroke: "$actionHollowFocusedText",
          },
        },
        "&:disabled": {
          backgroundColor: "$actionHollowDisabled",
          color: "$actionHollowDisabledText",
          boxShadow: "inset 0 0 0 1px $colors$actionHollowDisabledText",

          [`${Icon}`]: {
            stroke: "$actionHollowDisabledText",
          },
        },
      },
    },

    // Link variant specific overrides
    {
      vibe: "neutral",
      variant: "link",
      css: {
        color: "$linkSubdued",

        [`${Icon}`]: {
          stroke: "$linkSubdued",
        },

        "&:hover": {
          backgroundColor: "$actionLinkHovered",
          color: "$actionLinkHoveredText",

          [`${Icon}`]: {
            stroke: "$actionLinkHoveredText",
          },
        },
        "&:active": {
          backgroundColor: "$actionLinkFocused",
          color: "$actionLinkFocusedText",

          [`${Icon}`]: {
            stroke: "$actionLinkFocusedText",
          },
        },
        "&:focus": {
          backgroundColor: "$actionLinkFocused",
          color: "$actionLinkFocusedText",

          [`${Icon}`]: {
            stroke: "$actionLinkFocusedText",
          },
        },
        "&:disabled": {
          backgroundColor: "$actionLinkDisabled",
          color: "$actionLinkDisabledText",

          [`${Icon}`]: {
            stroke: "$actionLinkDisabledText",
          },
        },
      },
    },
    {
      vibe: "attract",
      variant: "link",
      css: {
        color: "$actionLinkText",

        [`${Icon}`]: {
          stroke: "$actionLinkText",
        },

        "&:hover": {
          backgroundColor: "$actionLinkHovered",
          color: "$actionLinkHoveredText",

          [`${Icon}`]: {
            stroke: "$actionLinkHoveredText",
          },
        },
        "&:active": {
          backgroundColor: "$actionLinkFocused",
          color: "$actionLinkFocusedText",

          [`${Icon}`]: {
            stroke: "$actionLinkFocusedText",
          },
        },
        "&:focus": {
          backgroundColor: "$actionLinkFocused",
          color: "$actionLinkFocusedText",

          [`${Icon}`]: {
            stroke: "$actionLinkFocusedText",
          },
        },
        "&:disabled": {
          backgroundColor: "$actionLinkDisabled",
          color: "$actionLinkDisabledText",

          [`${Icon}`]: {
            stroke: "$actionLinkDisabledText",
          },
        },
      },
    },
    {
      size: "small",
      variant: "link",
      css: {
        padding: "$01 $00",
      },
    },
    {
      size: "medium",
      variant: "link",
      css: {
        padding: "$01 $00",
      },
    },
    {
      size: "large",
      variant: "link",
      css: {
        padding: "$02 $00",
      },
    },
    {
      corners: "round",
      variant: "link",
      css: {
        borderRadius: "$sharp",
      },
    },
    {
      corners: "rounder",
      variant: "link",
      css: {
        borderRadius: "$sharp",
      },
    },
    {
      corners: "roundest",
      variant: "link",
      css: {
        borderRadius: "$sharp",
      },
    },
    {
      corners: "full",
      variant: "link",
      css: {
        borderRadius: "$sharp",
      },
    },
  ],
});

export const Button = styled("button", buttonLinkStyles);

export type ButtonStyledProps = React.ComponentProps<typeof Button>;
