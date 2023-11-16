# @jimmydalecleveland/stitches-ui-example

## 1.0.0

### Major Changes

- 22d89cd: I rarely feel ready to release v1, as there is always work to do and who knows what breaking changes are around the corner, but with the revamped theme in this update replacing the placeholder one that existed before, I think it is ready to be considered v1. There isn't actually a breaking change in this update, but the system is useable and stable enough at this point to move forward with the first major release. This theme needs a bit more tweaking, and it is just the default theme (you can customize the theme for this Design System at any level), but it does have enough time put into it to be a good starting point.

### Minor Changes

- 68504d7: `StarRating` component, and its helper components and utility functions, have been added. This includes utility functions for calculating a percentage to a custom star rating (defaulting to 5), which avoids rounding up for fairness reasons. It also includes a `Star` SVG that can have the colored layer path move (i.e. slide) across the gray star background to allow for states inbetween full and half stars. It also includes a `StarRatingGroup` which is used to display the rating text in standard ways without having to setup those layouts and sizing.

## 0.13.0

### Minor Changes

- 9bc256d: `Breadcrumbs` has been added, allowing for a simpler way to create an interactive breadcrumb trail of where the user is at in an app.

### Patch Changes

- 6d280c3: A bug was fixed where the themes `$body` font family was not being set by default. It was working correctly in Storybook but not in the demo Next.js app.

## 0.12.0

### Minor Changes

- 9d534a3: The `Link` and `SpaLink` components have been added, as well as an example of composing `next/link` with `SpaLink` in the web app directory. `Link` is your standard anchor with the design system styles through Vibes. `SpaLink` is intended for usage with single page app frameworks that use a special routing mechanism that doesn't support simple composing with an anchor, such as Next.js v12. You can use whichever is easier in your environment.
- 7d67ef3: The `BlockQuote` component has been added for a simple way to get a stylized blockquote.

## 0.11.0

### Minor Changes

- bcf681e: The `List` component has been added, which support typical bullet as well as lists with icons and multi-line lists, such as each item having a heading and text body while still wrapping all to the right of the icon/bullet. This is a handy little component that makes use of `Stack` to keep content aligned, respective to the bullet/icon, and allowing control over the horizontal spacing. It uses an SVG for the default `ul` behavior with bullets in order to stay consistent.

## 0.10.0

### Minor Changes

- 7da5fab: `Tag` has been added to the lineup. This component is typically used for labels, often with icons, for info, warnings, or critical notes. Think filter tags when searching for products, as one example. Handles icons the same way as `Button`: by passing the Icon reference `<Tag RightIcon={XMark} vibe="critical">`.

## 0.9.0

### Minor Changes

- c5eac52: This version adds the full features of `Button` that required previous components to implement fully. `Button` is a complex component in most Design Systems, and there are many ways to go about implementing it. The key features of the button in this system is that it uses the `vibe` system, with an additional `variant` system combination. For example, your button may be `solid`, `hollow` or a `link` variant, while needing to have `attract` or `neutral` styles for all those variants. This is called "Compound Variants" in stitches. The `Button` component also has support for icons through the `LeftIcon` and `RightIcon` prop. The uppercase names are to hint that you need to pass a component variable to them, not an instantiation (e.g. `<Button vibe="attract" LeftIcon={Rocket}>`). This allows Buttons to take control of how the icon is sized and what colors it has to match the `vibe` and `variant` of the button, which is very cumbersome to do the other way (i.e. passing `<Rocket vibe="attract" backgroundVibe="neutral">` into the Button's `LeftIcon` prop).

## 0.8.0

### Minor Changes

- bde1c67: This is another crucial layout component, typically used often but not as much as `Stack`. It is very handy but can be confused as a `Grid` from other libraries. The `Columns` (paired with `Column`) is used for common columnar layouts, such as a 1/3rd 2/3rd split that changes to stacked on smaller devices. It is _not_ meant for wrapping columned layouts, like css Grid is. I don't particularly find `Grid` components useful because if I need that much flexibility I prefer to just write a one-of grid style for that specific layout. `Column` (singular) is a helper component that lets you set the size, if you wish, of a particular column. e.g. `<Column width="1/5">`.

## 0.7.0

### Minor Changes

- d46a76d: The `Divider` component has been added, which can be used as a standalone or through layout components that are coming soon. It has some really cool functionality built in to allow it to change orientation automatically in flex/grid containers that switch orientation, filling up the space between elements correctly. This was so much harder to do reliably than I thought when I first attempted this.
- f29e583: The `Stack` and `Card` components have been added. `Stack` is a heavy lifter that is the most used layout component, and it deals with spacing between elements. The intended use is to wrap whatever components/elements you want to have space between (including dividers) and set the `space` property, which will apply the same spacing between all children. The `Stack` also handles alignment of children through the `align` property, as well as automatically making its children wrapped in `li` tags if the `as` property is set to `ol` or `ul`. `Card` is a visual component to be used as a container with common spacing, a `neutral` background, and a shadow. A typical layout of the web.

## 0.6.0

### Minor Changes

- 02068f6: `Inline` component has been added to the mix. The purpose of `Inline` is to wrap content that is meant to be rendered inline and add alignment and spacing for common layouts.

## 0.5.0

### Minor Changes

- bd54c1e: This update adds Icons, which follow the Vibes pattern, and have a separate `backgroundVibe` property for more flexibility depending on where the icons are placed. I've only added the first handful of icons, and the original SVGs all come from https://heroicons.com/.

## 0.4.0

### Minor Changes

- 6bb6072: Header component has been added with stories and tests. This component is intended to be used for all heading tags (h1-h6) and has its own default font and weights. The Heading component uses the `fz` utility property which gives responsive font sizing to any text within it.

### Patch Changes

- b35289e: The default lightest gray in the theme has been updated to be noticeable next to white. It was too close to white before.

## 0.3.0

### Minor Changes

- 5475a9d: The UI library was updated to use the TS config for `react-library`, and that config was updated to use ES2022, as I don't care to support older ES versions for this library. The `Text` component was added, which required a good chunk of theme updates, as well as font packages. No breaking changes, just more theme variables and the `fz` helper for dynamic text (responsively resized headings in particular, which is a component yet to come).
- 27d8104: The `Box` component was added, along with a large amount of initial theme configuration required for it and the upcoming components. Box is a building block component used in many other components, and has many helper props to accomplish common layout desires.

## 0.2.0

### Minor Changes

- 2b73213: update several eslint standards and fix all found eslint errors in packages

## 0.1.0

### Minor Changes

- 3c4de3c: Update name to be a unique package for UI
