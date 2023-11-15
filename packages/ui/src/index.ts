// component exports
export * from "./Box";
export * from "./Button";
export * from "./Card";
export * from "./Columns";
export * from "./Divider";
export * from "./Heading";
export * from "./Icon";
export * from "./Inline";
export * from "./Stack";
export * from "./Text";

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
