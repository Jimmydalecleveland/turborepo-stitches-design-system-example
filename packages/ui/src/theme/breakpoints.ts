/* eslint-disable tsdoc/syntax -- This rule is causing valid JSDoc syntax to have errors */
/**
 * Intended for use when indexing `breakpointWidths` to narrow `number` to
 * only the available breakpoints possible.
 */
export type BreakpointRange = 1 | 2 | 3;

/**
 * The possible keys for `theme` breakpoints. This is distinct from
 * `BreakpointSelector` (key with `@` prefix) as that is used for
 * setting variants at specific breakpoints.
 */
export type Breakpoint = `bp${BreakpointRange}`;

/**
 * Used for setting variants at specific breakpoints. `@initial` must be
 * included (per Stitches docs) to set the starting value if using any
 * breakpoints.
 * @example
 * <Box padding={{ '@initial': '02', '@bp1': '03' }} />
 */
export type BreakpointSelector = "@initial" | `@${Breakpoint}`;

/**
 * The number values used for `@media (min-width: value)` queries. These are
 * useful for setting `viewports` in Storybook, and other outside situations
 * where you can't use the `theme` object or styles conveniently.
 */
export const breakpointMinWidths = [640, 768, 1024] as const;

/**
 * The value format for `media` values in the `theme` object.
 */
export type BreakpointValue =
  `(min-width: ${(typeof breakpointMinWidths)[number]}px)`;

/**
 * The `theme` breakpoints object. This is exported here for use outside of
 * setting the `theme.media` properties.
 */
export const themeBreakpoints: Record<Breakpoint, BreakpointValue> = {
  bp1: `(min-width: ${breakpointMinWidths[0]}px)`,
  bp2: `(min-width: ${breakpointMinWidths[1]}px)`,
  bp3: `(min-width: ${breakpointMinWidths[2]}px)`,
};

/**
 * This is a helper type which is mostly used in the `theme/utils.ts` file.
 * It's used to create a type when generating breakpoint variants.
 * @example
 * const paddingVariants: GetBreakpointVariants<string> = {
 *     '@initial': '10px', // Value for the initial state
 *     '@bp1': '15px',     // Value for the first breakpoint
 *     '@bp2': '20px',     // Value for the second breakpoint
 *     // '@bp3' could be omitted if not needed for the third breakpoint
 * };
 */
export type GetBreakpointVariants<T> = {
  [K in BreakpointSelector]?: T;
};
