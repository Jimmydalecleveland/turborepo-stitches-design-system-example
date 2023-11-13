import type { Preview } from "@storybook/react";
import "@fontsource/karla/300.css";
import "@fontsource/karla/400.css";
import "@fontsource/karla/500.css";
import "@fontsource/karla/600.css";
import "@fontsource/karla/700.css";
import { globalCss, globalStyles as defaultGlobalStyles } from "../src";
import { breakpointMinWidths } from "../src/theme/breakpoints";

const preview: Preview = {
  decorators: [
    (Story) => {
      defaultGlobalStyles();
      globalStyles();
      return <Story />;
    },
  ],

  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },

    backgrounds: {
      default: "subdued",
      values: [
        {
          name: "neutral",
          value: "var(--colors-boxNeutral)",
        },
        {
          name: "subdued",
          value: "var(--colors-boxSubdued)",
        },
        {
          name: "info",
          value: "var(--colors-boxInfo)",
        },
        {
          name: "positive",
          value: "var(--colors-boxPositive)",
        },
        {
          name: "warning",
          value: "var(--colors-boxWarning)",
        },
        {
          name: "critical",
          value: "var(--colors-boxCritical)",
        },
        {
          name: "attract",
          value: "var(--colors-boxAttract)",
        },
        {
          name: "critical",
          value: "var(--colors-boxDisabled)",
        },
      ],
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    viewport: {
      viewports: {
        small: {
          name: "Small Mobile",
          styles: {
            width: "360px",
            height: "680px",
          },
          type: "mobile",
        },
        bp1: {
          name: "bp1",
          styles: {
            width: `${breakpointMinWidths[0]}px`,
            height: "1080px",
          },
          type: "mobile",
        },
        bp2: {
          name: "bp2",
          styles: {
            width: `${breakpointMinWidths[1]}px`,
            height: "1080px",
          },
          type: "tablet",
        },
        bp3: {
          name: "bp3",
          styles: {
            width: `${breakpointMinWidths[2]}px`,
            height: "100vh",
          },
          type: "desktop",
        },
      },
    },
  },
};

export const globalStyles = globalCss({
  "html, body": {
    padding: "$00",
    fontSize: "16px", // something, maybe storybook, is setting this to 18px
    fontFamily: "'Karla', sans-serif",
  },
});

export default preview;
