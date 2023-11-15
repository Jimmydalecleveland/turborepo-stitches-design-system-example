# Turborepo Stitches Design System Example

This repo is intended as an example of a larger scale Design System monorepo that houses a collection of techniques I've
accumulated over the years. A lot of the pieces have been influenced by hundreds of hours of work and research, but
there are plenty of things I'm still not happy with. I decided to put this out there, regardless of it being far from
perfect, because that's just how the development world is and I like it when people share "real" things.

## The Tech Stack

- [React](https://reactjs.org/) as the JS library, utilizing hooks and functional components.
- [TypeScript](https://www.typescriptlang.org/) for static type checking throughout the entire repo.
- [Next.js](https://nextjs.org/) as the example framework for testing/dogfooding/etc. the Design System within the
  monorepo.
  - Any other framework accepting React would do, this is just the most popular one and the one that ships with
    Turborepo, currently.
- [Stitches](https://stitches.dev/) as the CSS-in-TS library.
  - I've used a lot of CSS-in-JS libraries over the years and Stitches is one of my favorites, although it is now
    deprecated :(.
  - Still, the examples are useful, and you can use [Class Variant Authority](https://cva.style/docs) with something
    like [TailwindCSS](https://tailwindcss.com/) for a very similar experience.
- [Rollup](https://rollupjs.org/guide/en/) as the TS/JS/CSS bundler.
  - I've used many bundlers in the past, and tried many more while on the search for proper tree-shaking and
    code-splitting for JS and CSS. Rollup is the only one that gave me the full experience I was looking for.
- [Storybook](https://storybook.js.org/) for component documentation and testing.
  - I've used Storybook for years, and it's still the best option for rapidly developing and maintaining visual
    components.
- [GitHub Actions](https://github.com/features/actions) for CI/CD. This includes building, linting, testing, and uses
  Turborepo remote caching for less friction (downtime) on PRs.
  - While I don't enjoy the difficulty of troubleshooting Github Actions locally, they are very simple when you know
    some of the common patterns.
- [Changesets](https://github.com/changesets/changesets) for managing versioning and publishing through CI.
  - This is my favorite way of handling version updates for published packages on a team, and possibly even for solo
    development. It strikes a great balance between automation and control for me.
  - Each time a PR with a changeset is merged, it will be published to GitHub Packages and a release will be created.
- [Fontsource](https://fontsource.org/) for self-hosted fonts (default and can be overridden).
  - In my apps I often use `next/font`, particularly for minimizing layout shift, but I wanted an agnostic self-hosted
    option as the default.
- [ESLint](https://eslint.org/) for linting, with [Prettier](https://prettier.io/) for formatting.

### Apps and Packages

- `@jimmydalecleveland/stitches-ui-example`: The Design System and main purpose of the Repo. Published as a scoped
  package on GitHub.
- `web`: a [Next.js](https://nextjs.org/) app for testing/dogfooding/etc. the UI components before publishing.
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo. Uses `ES2022` for the design system, as I only want to
  support updated evergreen browsers for this project.

## Running Locally

### Install Dependencies

Run the following before any commands listed below:

```
npm i
```

### Build

To build all apps and packages, run the following command:

```
npm run build
```

### Docs

To spin up the Storybook docs for the Design System, run the following command:

```
npm run docs
```

### Develop

To develop all apps and packages, run the following command:

```
npm run dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to
share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. This repo uses my own Vercel account to cache remotely and has been set up
already.

## Key Concepts

I was largely influenced by [Braid](https://seek-oss.github.io/braid-design-system/), and much of Mark Dalgleish's work,
for much of this system. I've also studied many grid and column layout systems from the usual suspects (Material,
Foundation, Semantic, Chakra, etc.) and taken ideas about many other components from them.

This system makes heavy use of composition, even for spacing and layouts with components like `Stack` which you may have
seen in various forms of other systems. I've come to enjoy the reliability of this design philosophy, but I have no
problem admitting it is not without flaws and can feel verbose at times. For me, personally, it is worth the tradeoffs
because I have been in some nightmare situations with previous systems that rely on spacing being handled either inside
components (big ew) or by overwriting child styles from the parent. Finding what is actually applying spacing an
alignment in these systems can eventually be a huge headache, especially without a component snapshot diffing tool like
Chromatic (Storybook team).

It's also really important to note that this Design System was much more complicated than many others I've built due to
the challenge of supporting multiple "brands" or themes. Most Design Systems I encounter do not support this
functionality well, even though they are made to be adopted however you wish, they don't allow
for easy overriding of colors, fonts, spacing, etc. after you have set up the initial theme and components. It honestly
might seem like they do if you haven't really tried to apply other popular Design Systems in this fashion, but when I
put them to the test, they became impossible or extremely difficult to accomplish this ask.

### Vibes

A key theme across this design system is the idea of Vibes. Rather than using `primary`, `secondary`, `tertiary` and so
on, I've opted to use the purpose of each component in a more actionable way. Here are the `vibes` used in this system
as an intro:

- `neutral`
- `neutralInverse`
- `subdued`
- `positive`
- `warning`
- `critical`
- `info`
- `attract`
- `disabled`

Each of these not only sets colors but weights and other styles as well and each component determines how it will
interpret a vibe. For an example, a `Button` would choose the most eye-catching background color with a `vibe`
of `attract`, but it would also need to pick an appropriately readable text color. These colors are all typed variables
in the `stitches.config.ts` theme file.
This of course includes states like hover, focus, active, etc. as well.

`Text` would obviously not have a background but can still have a `attract` vibe which while change the `css` color to a
standout one described in the theme variables.

#### Neutral and Neutral Inverse

The `neutral` and `neutralInverse` are there to support light and dark themes without assuming which is your default. So
if a `neutral` background is white, then `neutralInverse` might be black or a very dark blue, as just one example. This
method helps keep the background and foreground colors readable on each other.

#### Helper Vibes

Vibes like `positive`, `warning`, `critical`, and `info` do not have the typical 10 color range the others do, but
instead only need 5. These are used for callouts, form validation, and such. I hope the names are self-explanatory,
which is why I chose them to be in this format.

### Responsive Properties

Stitches encourages the use of immutable style rules, which can be unintuitive for situations where you'd normally use
media queries in the actual styling.
Where this becomes powerful, though, is the ability to apply properties responsively when a component is used. Take this
simple example:

```tsx
<Inline alignX={{ "@initial": "center", "@bp2": "left" }}>
  <Text>Some text</Text>
  <Text>Some more text</Text>
</Inline>
```

Here, the `Inline` component is using the `alignX` prop to align the children horizontally. The `alignX` prop is typed
to accept a `ResponsiveValue` which is an object with keys that match the breakpoints in the `stitches.config.ts` file.
The values of the object are the values you want to apply at each breakpoint. In this case, the first breakpoint
is `@initial` which is the default value, and the second breakpoint is `@bp2` which is the second breakpoint in the
config file. This is a shorthand for `@media (min-width: 768px)` (default). The final result is that the elements will
be centered on smaller devices and left aligned on larger.

## The Components

- `Box`: The foundation of most components. It
- `Text`: The majority of text/copy on a page.
- `Heading`: A component for `hx` tags, that uses `clamp` for responsive resizing.
  - The size of the heading is determined by the `size` prop, which uses element tags as the values to adhere to a consistent style across heading types.
  - When passing a size, say `size="h2"`, the element will automatically be set as the appropriate `hx` tag, so `<h2>` in this example. This can be overridden by passing the `as` prop with a different heading tag.
  - Using `clamp` for all sizes, the heading will have a minimum size it will ever be, a maximum size, and it will scale between those sizes based on the viewport width. This is a nice way to handle some other responsive sizing methods that awkwardly shrink too much on smaller devices.
- `Button`: Uses the `vibe` system, as well as having a `hollow` variant for each vibe. Also supports left or right icons as props so it can balance and size them appropriately.
  - When using an Icon from the Design System with button, it is expected to pass the icon variable, not the instantiation of it. e.g. `<Button RightIcon={Rocket} vibe="attract">`. This is because Button handles calling the Icon and setting its colors to match the button vibe.
- `Icons`: Each icon is a named component, that uses the `vibe` interface, as well as a `backgroundVibe` for more
  flexibility.
  - Icons also have built in support within certain components, such as `Button` placing it on the left or right and
    making it match the `vibe` of the button.
  - I wanted `Icons` to be its own export that used method calling (e.g. `Icons.Rocket`), but ran into tree-shaking
    issues with my first attempts.
  - I have only added a few icons as examples, but they are all from [Heroicons](https://heroicons.com/). I simply
    have overrides for this Design System.
- `Inline`: The first "layout control" component. Used for laying out other components and elements in a row, and
  controlling alignment and spacing across the elements.
  - `Inline` is a common component for using "Responsive Properties" as described above.
- `Divider`: Ok, this one is pretty cool. You wouldn't think a `Divider` component could be so challenging to get right, but hoo doggy it can be.
  - I put a lot of research time into getting the semantic correct on this one, combined with ease of use and just doing what you want automatically.
  - The `Divider` can be used standalone, but it is commonly used as a prop for layout components like `Stack` and `Columns` (coming soon). When the layout orientation is changed, the dividers will swap orientation as well, and filled up the height or width correctly. This is actually very difficult to get correct.
- `Stack`: A heavy lifter that is the most used layout component, and it deals with spacing between elements. The intended use is to wrap whatever components/elements you want to have space between (including dividers) and set the space property, which will apply the same spacing between all children.
  - The Stack also handles alignment of children through the align property, as well as automatically making its children wrapped in `li` tags if the as property is set to `ol` or `ul`.
- `Card`: This is a visual component to be used as a container with common spacing, a neutral background, and a shadow. A typical layout of the web.
- `Columns`: This is another crucial layout component, typically used often but not as much as `Stack`. It is very handy but can be confused as a `Grid` from other libraries.
  - The `Columns` (paired with `Column`) is used for common columnar layouts, such as a 1/3rd 2/3rd split that changes to stacked on smaller devices.
  - It is _not_ meant for wrapping columned layouts, like css Grid is. I don't particularly find `Grid` components useful because if I need that much flexibility I prefer to just write a one-of grid style for that specific layout.
  - `Column` (singular) is a helper component that lets you set the size, if you wish, of a particular column. e.g. `<Column width="1/5">`
  - `Columns` uses `flex` under the hood, as I tried using `grid` in various ways, but it didn't fit my use case of needing to set the size of children as easily, like `Column` can.
