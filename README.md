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
  - I've used Storybook for years, and it's still the best option for rapidly developing and maintaining visual components.
- [GitHub Actions](https://github.com/features/actions) for CI/CD. This includes building, linting, testing, and uses Turborepo remote caching for less friction (downtime) on PRs.
  - While I don't enjoy the difficulty of troubleshooting Github Actions locally, they are very simple when you know some of the common patterns.
- [Changesets](https://github.com/changesets/changesets) for managing versioning and publishing through CI.
  - This is my favorite way of handling version updates for published packages on a team, and possibly even for solo development. It strikes a great balance between automation and control for me. 
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

### Build

To build all apps and packages, run the following command:

```
npm run build
```

### Develop

To develop all apps and packages, run the following command:

```
npm run dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to
share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. This repo uses my own Vercel account to cache remotely and has been set up already.

## Key Concepts

I was largely influenced by [Braid](https://seek-oss.github.io/braid-design-system/), and much of Mark Dalgleish's work, for much of this system. I've also studied many grid and column layout systems from the usual suspects (Material, Foundation, Semantic, Chakra, etc.) and taken ideas about many other components from them.

It's also really important to note that this Design System was much more complicated than many others I've built due to the challenge of supporting multiple "brands" or themes. Most Design Systems I encounter do not support this functionality well, even though they are made to be adopted however you wish, they don't allow
for easy overriding of colors, fonts, spacing, etc. after you have set up the initial theme and components. It honestly might seem like they do if you haven't really tried to apply other popular Design Systems in this fashion, but when I put them to the test, they became impossible or extremely difficult to accomplish this ask.

### Vibes

A key theme across this design system is the idea of Vibes. Rather than using `primary`, `secondary`, `tertiary` and so on, I've opted to use the purpose of each component in a more actionable way. Here are the `vibes` used in this system as an intro:

- `neutral`
- `neutralInverse`
- `subdued`
- `positive`
- `warning`
- `critical`
- `info`
- `attract`
- `disabled`

Each of these not only sets colors but weights and other styles as well and each component determines how it will interpret a vibe. For an example, a `Button` would choose the most eye-catching background color with a `vibe` of `attract`, but it would also need to pick an appropriately readable text color. These colors are all typed variables in the `stitches.config.ts` theme file.
This of course includes states like hover, focus, active, etc. as well.

`Text` would obviously not have a background but can still have a `attract` vibe which while change the `css` color to a standout one described in the theme variables.

#### Neutral and Neutral Inverse

The `neutral` and `neutralInverse` are there to support light and dark themes without assuming which is your default. So if a `neutral` background is white, then `neutralInverse` might be black or a very dark blue, as just one example. This method helps keep the background and foreground colors readable on each other.

#### Helper Vibes

Vibes like `positive`, `warning`, `critical`, and `info` do not have the typical 10 color range the others do, but instead only need 5. These are used for callouts, form validation, and such. I hope the names are self-explanatory, which is why I chose them to be in this format.

## The Components

- `Box`: The foundation of most components. It
- `Text`: The majority of text/copy on a page.
- `Heading`: A component for `hx` tags, that uses `clamp` for responsive resizing.
- `Button`:
- `Icons` - Each icon is a named component, that uses the `vibe` interface, as well as a `backgroundVibe` for more flexibility.
  - Icons also have built in support within certain components, such as `Button` placing it on the left or right and making it match the `vibe` of the button.
  - I wanted `Icons` to be its own export that used method calling (e.g. `Icons.Rocket`), but ran into tree-shaking issues with my first attempts.
  - I have only added a few icons as examples, but they are all from [Heroicons](https://heroicons.com/). I simply have overrides for this Design System.
