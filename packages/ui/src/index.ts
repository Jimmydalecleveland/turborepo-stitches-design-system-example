// component exports
export { default as Card } from "./card";
export { Button, type ButtonProps } from "./Button"

// theme exports - 
// for customizing and creating your own components
export {
  css,
  styled,
  globalCss,
  config,
  createTheme,
  getCssText,
} from './theme/stitches.config'

export type {
  ThemeSpace,
  ThemeFontSizes,
  ThemeFontWeights,
  ThemeRadii,
  ThemeShadows,
  CSS,
  ThemeBreakPoints,
  ThemeVibes,
} from './theme/stitches.config'
