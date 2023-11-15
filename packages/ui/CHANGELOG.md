# @jimmydalecleveland/stitches-ui-example

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
