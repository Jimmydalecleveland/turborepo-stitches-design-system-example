# @jimmydalecleveland/stitches-ui-example

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
