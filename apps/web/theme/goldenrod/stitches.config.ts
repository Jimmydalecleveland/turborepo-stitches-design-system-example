import { Merriweather, Lato } from "next/font/google";
import {
  createTheme,
  globalCss,
} from "@jimmydalecleveland/stitches-ui-example";
import { themeColors } from "./colors";

const lato = Lato({
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});
const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const customSiteTheme = createTheme({
  colors: { ...themeColors },
  fonts: {
    title: lato.style.fontFamily,
    body: merriweather.style.fontFamily,
  },
  // This override shows how to change the smallest and largest sizes particular elements should be,
  // since all headings use the `fz` utility function for clamping font sizes to accomplish responsive typography.
  fontSizes: {
    h1Min: 22,
    h1Max: 64,
    h2Min: 18,
    h2Max: 48,
  },
  fontWeights: {
    light: "300",
    regular: "300",
    medium: "400",
    bold: "400",
    heavy: "700",
    textDefault: "300",
    headingDefault: "400",
  },
  lineHeights: {
    body: "1.9",
    heading: "1.125",
  },
});

export const goldenrodGlobalStyles = globalCss({
  "*": {
    fontFamily: merriweather.style.fontFamily,
    fontWeight: 300,
  },

  // enable smooth scrolling for jump links
  html: {
    scrollBehavior: "smooth",

    // don't animate scrolling for user preference
    "@media screen and (prefers-reduced-motion: reduce)": {
      html: {
        scrollBehavior: "auto",
      },
    },
  },
});

export default customSiteTheme;
