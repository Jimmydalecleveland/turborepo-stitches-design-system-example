# @jimmydalecleveland/stitches-ui-example

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
