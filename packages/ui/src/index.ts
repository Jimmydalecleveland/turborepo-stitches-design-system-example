// component exports
export { default as Card } from "./card";
export * from "./Box";
export * from "./Button";
export * from "./Text";
export * from "./Heading";
export * from "./Icon";
export * from "./Inline";
export * from "./Divider";

// theme exports -
// for customizing and creating your own components
export {
  css,
  styled,
  globalCss,
  config,
  createTheme,
  getCssText,
  globalStyles,
} from "./theme/stitches.config";

export type {
  ThemeSpace,
  ThemeFontSizes,
  ThemeFontWeights,
  ThemeRadii,
  ThemeShadows,
  CSS,
  ThemeBreakPoints,
  ThemeVibes,
} from "./theme/stitches.config";
