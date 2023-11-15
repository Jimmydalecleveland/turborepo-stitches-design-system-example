# SpaLink

Frameworks with Single Page App (SPA) behavior require a lot more out of a custom link component than the typical styled anchor tag requires.

Here is an example of how you could set one up using SpaLink in Next.js 12:

```tsx
import * as React from "react";
import {
  SpaLink,
  type SpaLinkProps,
} from "@jimmydalecleveland/stitches-ui-example";
import NextLink, { type LinkProps as NextLinkProps } from "next/link";

export type LinkProps = Omit<SpaLinkProps, "href"> &
  Omit<NextLinkProps, "as" | "passHref" | "children">;

/**
 * This is an example usage of how to wrap the `SpaLink` component in Next.js to utilize Next.js' router.
 * Some of the example comes from their docs, but it requires a component that properly forwards refs to
 * the underlying anchor element. Their strategy and guidance has also changed multiple times over the years,
 * so it is likely they have a new way to accomplish this. But the end goal is to allow you to simply use this
 * `UINextLink` component as a replacement for `next/link` with the UI styles.
 */
const UiNextLink = React.forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { href, ...props },
  ref,
) {
  return (
    <NextLink href={href} legacyBehavior passHref>
      <SpaLink {...props} ref={ref} />
    </NextLink>
  );
});

export default UiNextLink;
```
