# web

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
