---
"@jimmydalecleveland/stitches-ui-example": minor
"web": minor
---

This version adds the full features of `Button` that required previous components to implement fully. `Button` is a complex component in most Design Systems, and there are many ways to go about implementing it. The key features of the button in this system is that it uses the `vibe` system, with an additional `variant` system combination. For example, your button may be `solid`, `hollow` or a `link` variant, while needing to have `attract` or `neutral` styles for all those variants. This is called "Compound Variants" in stitches. The `Button` component also has support for icons through the `LeftIcon` and `RightIcon` prop. The uppercase names are to hint that you need to pass a component variable to them, not an instantiation (e.g. `<Button vibe="attract" LeftIcon={Rocket}>`). This allows Buttons to take control of how the icon is sized and what colors it has to match the `vibe` and `variant` of the button, which is very cumbersome to do the other way (i.e. passing `<Rocket vibe="attract" backgroundVibe="neutral">` into the Button's `LeftIcon` prop).
