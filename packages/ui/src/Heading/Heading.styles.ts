import { styled } from '../theme/stitches.config'
import { baseBox } from '../Box/Box.styles'
import { universalTextVariants } from '../Text/Text.styles'

/**
 * h3 is the default because it's the first level that should be
 * used multiple times throughout a page. It's expected to select
 * which tag when using the component.
 */
export const Heading = styled("h3", baseBox, universalTextVariants, {
  fontFamily: "$title",
  fontWeight: "$headingDefault",
  lineHeight: "$title",

  variants: {
    size: {
      h5: {
        fz: "h5",
      },
      h4: {
        fz: "h4",
      },
      h3: {
        fz: "h3",
      },
      h2: {
        fz: "h2",
      },
      h1: {
        fz: "h1",
      },
      display: {
        fz: "display",
      },
      overline: {
        fz: "overline",
        letterSpacing: "0.1rem",
        textTransform: "uppercase",
      },
    },
    vibe: {
      neutral: {
        color: "$headingNeutral",
      },
      neutralInverse: {
        color: "$headingNeutralInverse",
      },
      subdued: {
        color: "$headingSubdued",
      },
      positive: {
        color: "$headingPositive",
      },
      attract: {
        color: "$headingAttract",
      },
      warning: {
        color: "$headingWarning",
      },
      critical: {
        color: "$headingCritical",
      },
      disabled: {
        color: "$headingDisabled",
      },
    },
  },
});
