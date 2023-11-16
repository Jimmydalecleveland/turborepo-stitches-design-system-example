# web

## 1.12.0

### Minor Changes

- eeffec1: A custom theme example, with dedicated page (`/custom-theme-example`) has been added to the web app. It shows how to override a theme with an entirely different set of colors, as well as fine grain control over how component types use those colors, as well as responsive font size overrides and applying a theme at a specific element (in this example, a single page route).

## 1.11.0

### Minor Changes

- 9bc256d: `Breadcrumbs` has been added, allowing for a simpler way to create an interactive breadcrumb trail of where the user is at in an app.

### Patch Changes

- 6d280c3: A bug was fixed where the themes `$body` font family was not being set by default. It was working correctly in Storybook but not in the demo Next.js app.
- Updated dependencies [6d280c3]
- Updated dependencies [9bc256d]
  - @jimmydalecleveland/stitches-ui-example@0.13.0

## 1.10.0

### Minor Changes

- 9d534a3: The `Link` and `SpaLink` components have been added, as well as an example of composing `next/link` with `SpaLink` in the web app directory. `Link` is your standard anchor with the design system styles through Vibes. `SpaLink` is intended for usage with single page app frameworks that use a special routing mechanism that doesn't support simple composing with an anchor, such as Next.js v12. You can use whichever is easier in your environment.
- 7d67ef3: The `BlockQuote` component has been added for a simple way to get a stylized blockquote.

### Patch Changes

- Updated dependencies [9d534a3]
- Updated dependencies [7d67ef3]
  - @jimmydalecleveland/stitches-ui-example@0.12.0

## 1.9.0

### Minor Changes

- bcf681e: The `List` component has been added, which support typical bullet as well as lists with icons and multi-line lists, such as each item having a heading and text body while still wrapping all to the right of the icon/bullet. This is a handy little component that makes use of `Stack` to keep content aligned, respective to the bullet/icon, and allowing control over the horizontal spacing. It uses an SVG for the default `ul` behavior with bullets in order to stay consistent.

### Patch Changes

- Updated dependencies [bcf681e]
  - @jimmydalecleveland/stitches-ui-example@0.11.0

## 1.8.0

### Minor Changes

- 7da5fab: `Tag` has been added to the lineup. This component is typically used for labels, often with icons, for info, warnings, or critical notes. Think filter tags when searching for products, as one example. Handles icons the same way as `Button`: by passing the Icon reference `<Tag RightIcon={XMark} vibe="critical">`.

### Patch Changes

- Updated dependencies [7da5fab]
  - @jimmydalecleveland/stitches-ui-example@0.10.0

## 1.7.0

### Minor Changes

- c5eac52: This version adds the full features of `Button` that required previous components to implement fully. `Button` is a complex component in most Design Systems, and there are many ways to go about implementing it. The key features of the button in this system is that it uses the `vibe` system, with an additional `variant` system combination. For example, your button may be `solid`, `hollow` or a `link` variant, while needing to have `attract` or `neutral` styles for all those variants. This is called "Compound Variants" in stitches. The `Button` component also has support for icons through the `LeftIcon` and `RightIcon` prop. The uppercase names are to hint that you need to pass a component variable to them, not an instantiation (e.g. `<Button vibe="attract" LeftIcon={Rocket}>`). This allows Buttons to take control of how the icon is sized and what colors it has to match the `vibe` and `variant` of the button, which is very cumbersome to do the other way (i.e. passing `<Rocket vibe="attract" backgroundVibe="neutral">` into the Button's `LeftIcon` prop).

### Patch Changes

- Updated dependencies [c5eac52]
  - @jimmydalecleveland/stitches-ui-example@0.9.0

## 1.6.0

### Minor Changes

- bde1c67: This is another crucial layout component, typically used often but not as much as `Stack`. It is very handy but can be confused as a `Grid` from other libraries. The `Columns` (paired with `Column`) is used for common columnar layouts, such as a 1/3rd 2/3rd split that changes to stacked on smaller devices. It is _not_ meant for wrapping columned layouts, like css Grid is. I don't particularly find `Grid` components useful because if I need that much flexibility I prefer to just write a one-of grid style for that specific layout. `Column` (singular) is a helper component that lets you set the size, if you wish, of a particular column. e.g. `<Column width="1/5">`.

### Patch Changes

- Updated dependencies [bde1c67]
  - @jimmydalecleveland/stitches-ui-example@0.8.0

## 1.5.0

### Minor Changes

- 02068f6: `Inline` component has been added to the mix. The purpose of `Inline` is to wrap content that is meant to be rendered inline and add alignment and spacing for common layouts.

### Patch Changes

- Updated dependencies [02068f6]
  - @jimmydalecleveland/stitches-ui-example@0.6.0

## 1.4.0

### Minor Changes

- bd54c1e: This update adds Icons, which follow the Vibes pattern, and have a separate `backgroundVibe` property for more flexibility depending on where the icons are placed. I've only added the first handful of icons, and the original SVGs all come from https://heroicons.com/.

### Patch Changes

- Updated dependencies [bd54c1e]
  - @jimmydalecleveland/stitches-ui-example@0.5.0

## 1.3.0

### Minor Changes

- b35289e: The beginning components have been added as a quick example to the web app (Next.js), and the global styles have been applied in the root layout.

### Patch Changes

- Updated dependencies [b35289e]
- Updated dependencies [6bb6072]
  - @jimmydalecleveland/stitches-ui-example@0.4.0

## 1.2.0

### Minor Changes

- 2b73213: update several eslint standards and fix all found eslint errors in packages

### Patch Changes

- Updated dependencies [2b73213]
  - @jimmydalecleveland/stitches-ui-example@0.2.0

## 1.1.0

### Minor Changes

- 3c4de3c: Update name to be a unique package for UI

### Patch Changes

- Updated dependencies [3c4de3c]
  - @jimmydalecleveland/stitches-ui-example@0.1.0
