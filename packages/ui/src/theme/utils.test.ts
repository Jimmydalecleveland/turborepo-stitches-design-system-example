import { config } from './stitches.config'
import { createVariantMapping, getAllBorderRadiiVariants, getAllSpacingVariants, getCssWithThemeValues, } from './utils'

test('getCssWithThemeValues', () => {
  const cssProperty = 'borderRadius'
  const themeProperty = 'radii'
  const result = getCssWithThemeValues(cssProperty, themeProperty)

  expect(result).toEqual({
    full: {borderRadius: config.theme.radii.full},
    round: {borderRadius: config.theme.radii.round},
    rounder: {borderRadius: config.theme.radii.rounder},
    roundest: {borderRadius: config.theme.radii.roundest},
    sharp: {borderRadius: config.theme.radii.sharp},
  })
})

test('getAllSpacingVariants', () => {
  const cssShapeCallback = (val: string): { padding: string } => ({
    padding: val,
  })
  const result = getAllSpacingVariants(cssShapeCallback)

  expect(result).toEqual({
    gutter: {padding: config.theme.space.gutter},
    '00': {padding: config.theme.space['00']},
    '01': {padding: config.theme.space['01']},
    '02': {padding: config.theme.space['02']},
    '03': {padding: config.theme.space['03']},
    '04': {padding: config.theme.space['04']},
    '05': {padding: config.theme.space['05']},
    '06': {padding: config.theme.space['06']},
    '07': {padding: config.theme.space['07']},
    '08': {padding: config.theme.space['08']},
    '09': {padding: config.theme.space['09']},
    '10': {padding: config.theme.space['10']},
    '11': {padding: config.theme.space['11']},
    '12': {padding: config.theme.space['12']},
    '13': {padding: config.theme.space['13']},
    '14': {padding: config.theme.space['14']},
    '15': {padding: config.theme.space['15']},
    '16': {padding: config.theme.space['16']},
    '17': {padding: config.theme.space['17']},
  })
})

test('getAllBorderRadiiVariants', () => {
  const cssShapeCallback = (val: string): Record<string, string> => ({
    borderTopRightRadius: val,
    borderTopLeftRadius: val,
  })
  const result = getAllBorderRadiiVariants(cssShapeCallback)

  expect(result).toEqual({
    sharp: {
      borderTopRightRadius: config.theme.radii.sharp,
      borderTopLeftRadius: config.theme.radii.sharp,
    },
    round: {
      borderTopRightRadius: config.theme.radii.round,
      borderTopLeftRadius: config.theme.radii.round,
    },
    rounder: {
      borderTopRightRadius: config.theme.radii.rounder,
      borderTopLeftRadius: config.theme.radii.rounder,
    },
    roundest: {
      borderTopRightRadius: config.theme.radii.roundest,
      borderTopLeftRadius: config.theme.radii.roundest,
    },
    full: {
      borderTopRightRadius: config.theme.radii.full,
      borderTopLeftRadius: config.theme.radii.full,
    },
  })
})

describe('createVariantMapping', () => {
  type InputValue = 'small' | 'medium' | 'large'
  const inputMap: Record<InputValue, string> = {
    small: 'sm',
    medium: 'md',
    large: 'lg',
  }

  test('returns mapped value', () => {
    const inputValue: InputValue = 'small'
    const result = createVariantMapping(inputValue, inputMap)

    expect(result).toEqual('sm')
  })

  test('returns breakpoint object with mapped values', () => {
    const result1 = createVariantMapping(
      {'@initial': 'small', '@bp1': 'medium'},
      inputMap
    )
    expect(result1).toEqual({
      '@initial': 'sm',
      '@bp1': 'md',
    })

    const result2 = createVariantMapping(
      {
        '@initial': 'medium',
        '@bp1': 'large',
        '@bp2': 'small',
        '@bp3': 'medium',
      },
      inputMap
    )
    expect(result2).toEqual({
      '@initial': 'md',
      '@bp1': 'lg',
      '@bp2': 'sm',
      '@bp3': 'md',
    })
  })
})
