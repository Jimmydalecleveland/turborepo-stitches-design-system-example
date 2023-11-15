// noinspection HtmlRequiredTitleElement

import type { Metadata } from "next";
import {
  getCssText,
  globalStyles,
} from "@jimmydalecleveland/stitches-ui-example";

export const metadata: Metadata = {
  title: "Stitches UI Example",
  description:
    "A design system built with Stitches, Turborepo, Rollup, and Next.js",
};

globalStyles();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <html lang="en">
      <head>
        <style
          dangerouslySetInnerHTML={{ __html: getCssText() }}
          id="stitches"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
