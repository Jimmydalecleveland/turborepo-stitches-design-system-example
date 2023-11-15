---
"@jimmydalecleveland/stitches-ui-example": minor
"web": minor
---

This is another crucial layout component, typically used often but not as much as `Stack`. It is very handy but can be confused as a `Grid` from other libraries. The `Columns` (paired with `Column`) is used for common columnar layouts, such as a 1/3rd 2/3rd split that changes to stacked on smaller devices. It is _not_ meant for wrapping columned layouts, like css Grid is. I don't particularly find `Grid` components useful because if I need that much flexibility I prefer to just write a one-of grid style for that specific layout. `Column` (singular) is a helper component that lets you set the size, if you wish, of a particular column. e.g. `<Column width="1/5">`.
