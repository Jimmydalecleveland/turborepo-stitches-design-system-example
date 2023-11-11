export const BASE_REM = 16

export type ThemeTextSizes =
  | '01'
  | '02'
  | '03'
  | '04'
  | '05'
  | '06'
  | '07'
  | '08'
  | '09'
  | '10'
  | '11'
  | '12'

export const pxTextSizes: Record<ThemeTextSizes, number> = {
  '01': 12,
  '02': 14,
  '03': 16,
  '04': 18,
  '05': 20,
  '06': 24,
  '07': 28,
  '08': 32,
  '09': 36,
  '10': 40,
  '11': 48,
  '12': 56,
}

export type TextTokens =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'h5'
  | 'h4'
  | 'h3'
  | 'h2'
  | 'h1'
  | 'display'
  | 'overline'

export const textSizes: Record<
  `${TextTokens}Min` | `${TextTokens}Max`,
  number
> = {
  xsMin: pxTextSizes['01'],
  xsMax: pxTextSizes['01'],
  smMin: pxTextSizes['02'],
  smMax: pxTextSizes['02'],
  mdMin: pxTextSizes['03'],
  mdMax: pxTextSizes['03'],
  lgMin: pxTextSizes['05'],
  lgMax: pxTextSizes['05'],
  xlMin: pxTextSizes['06'],
  xlMax: pxTextSizes['06'],
  h5Min: pxTextSizes['04'],
  h5Max: pxTextSizes['06'],
  h4Min: pxTextSizes['05'],
  h4Max: pxTextSizes['07'],
  h3Min: pxTextSizes['06'],
  h3Max: pxTextSizes['08'],
  h2Min: pxTextSizes['07'],
  h2Max: pxTextSizes['10'],
  h1Min: pxTextSizes['08'],
  h1Max: pxTextSizes['11'],
  displayMin: pxTextSizes['09'],
  displayMax: pxTextSizes['12'],
  overlineMin: pxTextSizes['01'],
  overlineMax: pxTextSizes['01'],
}
