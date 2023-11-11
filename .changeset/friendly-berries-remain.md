---
"tsconfig": minor
"@jimmydalecleveland/stitches-ui-example": minor
---

The UI library was updated to use the TS config for `react-library`, and that config was updated to use ES2022, as I don't care to support older ES versions for this library. The `Text` component was added, which required a good chunk of theme updates, as well as font packages. No breaking changes, just more theme variables and the `fz` helper for dynamic text (responsively resized headings in particular, which is a component yet to come).
