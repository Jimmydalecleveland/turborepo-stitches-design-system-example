import { createStitches, type CSS as StitchesCSS } from '@stitches/react'
import * as colors from './colors'
import { themeBreakpoints } from "./breakpoints";

export const {
  css,
  styled,
  globalCss,
  config,
  createTheme,
  getCssText,
  theme,
} = createStitches({
  theme: {
    colors: {
      // Box
      boxNeutral: 'white',
      boxNeutralInverse: colors.primary[8],
      boxSubdued: colors.gray[0],
      boxPositive: colors.positive[0],
      boxWarning: colors.warning[0],
      boxCritical: colors.critical[0],
      boxInfo: colors.info[0],
      boxAttract: colors.primary[0],
      boxDisabled: colors.gray[1],

      actionNeutral: 'slateblue',
    },
    space: {
      gutter: '16px',
      '00': '0px',
      '01': '4px',
      '02': '8px',
      '03': '12px',
      '04': '16px',
      '05': '20px',
      '06': '24px',
      '07': '32px',
      '08': '40px',
      '09': '48px',
      '10': '64px',
      '11': '80px',
      '12': '96px',
      '13': '128px',
      '14': '160px',
      '15': '192px',
      '16': '224px',
      '17': '256px',
    },
    fontSizes: {
      baseRem: 16,
    },
    fontWeights: {
      light: '300',
      regular: '400',
      medium: '500',
      bold: '600',
      heavy: '700',
      textDefault: '400',
      headingDefault: '700',
    },
    lineHeights: {
      title: '1.25',
      body: '1.5',
    },
    radii: {
      sharp: '0px',
      round: '8px',
      rounder: '16px',
      roundest: '24px',
      full: '9999px',
    },
    shadows: {
      none: 'none',
      low: '0 1px 3px 0px rgba(0, 31, 41, 0.1)',
      medium: '0 4px 8px -2px rgba(0, 31, 41, 0.1)',
      high: '0 12px 16px -4px rgba(0, 31, 41, 0.1)',
      highest: '0 20px 24px -4px rgba(0, 31, 41, 0.1)',
    },
  },
  media: {
    ...themeBreakpoints,
  },
})

export type CSS = StitchesCSS<typeof config>
export type ThemeRadii = keyof typeof config.theme.radii
export type ThemeSpace = keyof typeof config.theme.space
export type ThemeShadows = keyof typeof config.theme.shadows
export type ThemeFontSizes = keyof typeof config.theme.fontSizes

/*
 * `textDefault` and `headingDefault` are base settings that we
 * don't want to be possible props that can be passed to the
 * `Text` and `Heading` components.
 */
export type ThemeFontWeights = keyof Omit<
  typeof config.theme.fontWeights,
  'textDefault' | 'headingDefault'
>

export type ThemeBreakPoints = keyof typeof config.media

export type ThemeVibes =
  | 'neutral'
  | 'neutralInverse'
  | 'subdued'
  | 'positive'
  | 'warning'
  | 'critical'
  | 'info'
  | 'attract'
  | 'disabled'

