import { css, styled } from '../theme/stitches.config'
import { baseBox } from '../Box/Box.styles'

export const universalTextVariants = css({
  variants: {
    align: {
      left: {textAlign: 'left'},
      center: {textAlign: 'center'},
      right: {textAlign: 'right'},
    },
    decoration: {
      strikethrough: {
        textDecoration: 'line-through',
      },
      underline: {
        textDecoration: 'underline',
      },
    },
    weight: {
      light: {
        fontWeight: '$light',
      },
      regular: {
        fontWeight: '$regular',
      },
      medium: {
        fontWeight: '$medium',
      },
      bold: {
        fontWeight: '$bold',
      },
      heavy: {
        fontWeight: '$heavy',
      },
    },
    italic: {
      true: {
        fontStyle: 'italic',
      },
    },
  },
})

export const Text = styled('span', baseBox, universalTextVariants, {
  lineHeight: '$body',

  variants: {
    display: {
      // Any inline elements, such as spans, should still be block displayed for
      // general alignment reasons. If it's ever intended to be inline, the proper
      // wrapping component should be used, or alternative Text components like `Strong`
      block: {
        display: 'block',
      },
      inline: {
        display: 'inline',
      },
    },
    size: {
      xs: {
        fz: 'xs',
      },
      sm: {
        fz: 'sm',
      },
      md: {
        fz: 'md',
      },
      lg: {
        fz: 'lg',
      },
      xl: {
        fz: 'xl',
      },
    },
    vibe: {
      neutral: {
        color: '$textNeutral',
      },
      neutralInverse: {
        color: '$textNeutralInverse',
      },
      subdued: {
        color: '$textSubdued',
      },
      positive: {
        color: '$textPositive',
      },
      warning: {
        color: '$textWarning',
      },
      critical: {
        color: '$textCritical',
      },
      info: {
        color: '$textInfo',
      },
      attract: {
        color: '$textAttract',
      },
      disabled: {
        color: '$textDisabled',
      },
    },
  },
})
