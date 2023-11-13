/* eslint-disable @typescript-eslint/no-explicit-any -- any is needed for CSS unknown properties */
/* eslint-disable tsdoc/syntax -- This rule is causing valid JSDoc syntax to have errors */
import type { BreakpointSelector, GetBreakpointVariants } from "./breakpoints";
import type { CSS, ThemeRadii } from "./stitches.config";
import { config } from "./stitches.config";

/**
 * This helper is meant to make individual theme token range functions
 * easier to build by abstracting the repeated parts. It's primarily meant
 * for `variants` objects for Stitches styled components.
 *
 * @param cssProperty - the css object property to assign a value to
 * @param themeProperty - the `theme` key with the values you want to assign
 * @returns an `variants` CSS object with the css property assigned to each theme property
 * @example
 * getBorderRadii() {
 *   return getCssWithThemeValues('borderRadius', 'radii')
 * }
 */
export function getCssWithThemeValues(
  cssProperty: keyof CSS,
  themeProperty: keyof typeof config.theme,
): Record<string, any> {
  return Object.keys(config.theme[themeProperty]).reduce<Record<string, any>>(
    (acc, curr) => {
      const typedCurrKey =
        curr as keyof (typeof config.theme)[typeof themeProperty];
      acc[curr] = {
        [cssProperty]: config.theme[themeProperty][typedCurrKey],
      };

      return acc;
    },
    {},
  );
}

export function getAllSpacingVariants(
  cssShapeCallback: (val: string) => CSS,
): Record<string, any> {
  return Object.keys(config.theme.space).reduce<Record<string, any>>(
    (acc, curr) => {
      const typedCurrKey = curr as keyof typeof config.theme.space;
      const val = config.theme.space[typedCurrKey];

      // Create the key;value at the current key, with the desired
      // object shape as the value.
      // e.g. { small: { width: "14px" } }
      acc[curr] = cssShapeCallback(val);
      return acc;
    },
    {},
  );
}

export type VariantCSS<T extends string> = Record<T, CSS>;

export function getAllBorderRadiiVariants(
  cssShapeCallback: (val: string) => CSS,
): VariantCSS<ThemeRadii> {
  /* TODO: These castings are unfortunate but I'm currently not knowledgeable enough to avoid them
   * with the amount of time I'm willing to spend on this.
   */
  const tokens = Object.keys(config.theme.radii) as ThemeRadii[];
  const initial: VariantCSS<ThemeRadii> = {} as VariantCSS<ThemeRadii>;
  return tokens.reduce<VariantCSS<ThemeRadii>>((acc, curr) => {
    const val = config.theme.radii[curr];
    acc[curr] = cssShapeCallback(val);
    return acc;
  }, initial);
}

export function getFontWeights(): Record<string, any> {
  return getCssWithThemeValues("fontWeight", "fontWeights");
}

/**
 * This function is needed when the `variants` of a Stitches component are not
 * the same as the `props` your component takes in. This can happen when components
 * are being composed together, but you want to automate and sync up the variants,
 * such as a `Button` component using `Icon` and setting the size based on the button
 * size.
 *
 * Another unique situation is the `Column` component which has a `width` property
 * that allows fractions, but those values will not output as a `className` properly
 * so the Stitches component `width` variants have different names. See example below.
 *
 * @param value - A string or object of valid breakpoint values
 * @param valueMap - A mapping object of the `value` to the intended `variant` value
 * @returns - A string or object of the mapped values
 * @example
 * const result = createVariantMapping(
 *   '1/2',
 *   { '1/2': 'half', '1/3': 'third', '1/4': 'oneFourth' }
 * )
 * // result = 'half'
 *
 * const result = createVariantMapping(
 *   { '@initial': '1/2', '@bp1': '1/3'},
 *   { '1/2': 'half', '1/3': 'third', '1/4': 'oneFourth' }
 * )
 * // result = { '@initial': 'half', '@bp1': 'third' }
 */
export function createVariantMapping<
  TProp extends string,
  TVariant extends string,
>(
  value: TProp | GetBreakpointVariants<TProp>,
  valueMap: Record<TProp, TVariant>,
): TVariant | GetBreakpointVariants<TVariant> {
  if (typeof value === "string") {
    return valueMap[value];
  }

  return (Object.keys(value) as BreakpointSelector[]).reduce<
    GetBreakpointVariants<TVariant>
  >((acc, key) => {
    const propKey = value[key];
    if (!propKey) return acc;

    acc[key] = valueMap[propKey];
    return acc;
  }, {});
}
