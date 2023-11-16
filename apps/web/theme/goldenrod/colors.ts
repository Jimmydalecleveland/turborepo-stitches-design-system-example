/* This is dumb, but the alternatives I've found are more dumb. */
type FullColorArray = readonly [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string
]

type SupportColorArray = readonly [string, string, string, string, string]

/*
 * The primary color is your "brand" color,
 * and is used across all elements. This color
 * can define the overall feel and can elicit emotion.
 */
export const primary: FullColorArray = [
  'hsla(49, 100%, 96%, 1)',
  'hsla(48, 100%, 88%, 1)',
  'hsla(48, 95%, 76%, 1)',
  'hsla(48, 94%, 68%, 1)',
  'hsla(44, 92%, 63%, 1)',
  'hsla(42, 87%, 55%, 1)',
  'hsla(36, 77%, 49%, 1)',
  'hsla(29, 80%, 44%, 1)',
  'hsla(22, 82%, 39%, 1)',
  'hsla(15, 86%, 30%, 1)',
]

/*
 * The secondary color highlights or complements
 * the primary color. These are used sparingly across
 * all interactive elements such as buttons, links, inputs, etc.
 */
export const secondary: FullColorArray = [
  'hsla(195, 100%, 95%, 1)',
  'hsla(195, 100%, 85%, 1)',
  'hsla(195, 97%, 75%, 1)',
  'hsla(196, 94%, 67%, 1)',
  'hsla(197, 92%, 61%, 1)',
  'hsla(199, 84%, 55%, 1)',
  'hsla(201, 79%, 46%, 1)',
  'hsla(202, 83%, 41%, 1)',
  'hsla(203, 87%, 34%, 1)',
  'hsla(204, 96%, 27%, 1)',
]

/*
 * The tertiary color highlights or complements the
 * primary and secondary color. These are to be used
 * to make the UI elements stand out.
 */
export const tertiary: FullColorArray = [
  'hsla(200, 80%, 96%, 1)',
  'hsla(200, 68%, 90%, 1)',
  'hsla(200, 51%, 80%, 1)',
  'hsla(200, 46%, 69%, 1)',
  'hsla(200, 40%, 58%, 1)',
  'hsla(200, 34%, 49%, 1)',
  'hsla(200, 39%, 43%, 1)',
  'hsla(200, 48%, 35%, 1)',
  'hsla(200, 52%, 31%, 1)',
  'hsla(200, 62%, 24%, 1)',
]

/*
 * This is color is used for star ratings and laurel icons.
 */
export const extended: FullColorArray = [
  'hsla(30, 86%, 93%, 1)',
  'hsla(38, 100%, 83%, 1)',
  'hsla(32, 100%, 73%, 1)',
  'hsla(32, 100%, 65%, 1)',
  'hsla(30, 86%, 62%, 1)',
  'hsla(30, 86%, 49%, 1)',
  'hsla(30, 86%, 42%, 1)',
  'hsla(30, 86%, 33%, 1)',
  'hsla(30, 87%, 22%, 1)',
  'hsla(29, 88%, 11%, 1)',
]

/*
 * Gray is a neutral color and is the foundation of the
 * color system. Almost everything in UI design —
 * text, form fields, backgrounds, dividers — are usually gray.
 */
export const gray: FullColorArray = [
  'hsla(0, 0%, 97%, 1)',
  'hsla(0, 0%, 88%, 1)',
  'hsla(0, 0%, 81%, 1)',
  'hsla(0, 0%, 69%, 1)',
  'hsla(0, 0%, 62%, 1)',
  'hsla(0, 0%, 49%, 1)',
  'hsla(0, 0%, 38%, 1)',
  'hsla(0, 0%, 32%, 1)',
  'hsla(0, 0%, 23%, 1)',
  'hsla(0, 0%, 13%, 1)',
]

/*
 * The text colors are used to define all text colors on the site.
 */
export const text: FullColorArray = [
  'hsla(0, 0%, 98%, 1)',
  'hsla(0, 0%, 95%, 1)',
  'hsla(0, 0%, 91%, 1)',
  'hsla(0, 0%, 84%, 1)',
  'hsla(0, 0%, 65%, 1)',
  'hsla(0, 0%, 47%, 1)',
  'hsla(0, 0%, 35%, 1)',
  'hsla(0, 0%, 27%, 1)',
  'hsla(0, 0%, 17%, 1)',
  'hsla(0, 0%, 11%, 1)',
]

/*
 * Positive, Error, Warning, Info, Alert.
 * These colors grab a users attention, provide feedback
 * and communicate behavior. If you're using one of these
 * colors as your primary color, it can be helpful to introduce
 * a different hue for your utility color.
 */
export const positive: SupportColorArray = [
  'hsla(152, 68%, 96%, 1)',
  'hsla(156, 73%, 74%, 1)',
  'hsla(160, 51%, 49%, 1)',
  'hsla(164, 71%, 34%, 1)',
  'hsla(170, 97%, 15%, 1)',
]

export const critical: SupportColorArray = [
  'hsla(360, 100%, 95%, 1)',
  'hsla(360, 100%, 80%, 1)',
  'hsla(356, 75%, 53%, 1)',
  'hsla(352, 90%, 35%, 1)',
  'hsla(348, 94%, 20%, 1)',
]

export const warning: SupportColorArray = [
  'hsla(58, 94%, 91%, 1)',
  'hsla(54, 100%, 69%, 1)',
  'hsla(50, 94%, 50%, 1)',
  'hsla(45, 100%, 40%, 1)',
  'hsla(40, 100%, 26%, 1)',
]

export const info: SupportColorArray = [
  'hsla(180, 100%, 92%, 1)',
  'hsla(192, 100%, 79%, 1)',
  'hsla(192, 100%, 45%, 1)',
  'hsla(194, 100%, 37%, 1)',
  'hsla(199, 100%, 25%, 1)',
]

export const colors = {
  primary,
  secondary,
  tertiary,
  extended,
  gray,
  text,
  positive,
  critical,
  warning,
  info,
}

export const themeColors = {
  // Box
  boxNeutral: 'white',
  boxNeutralInverse: colors.primary[8],
  boxSubdued: colors.gray[0],
  boxPositive: colors.positive[0],
  boxWarning: colors.warning[0],
  boxCritical: colors.critical[0],
  boxInfo: colors.info[0],
  boxAttract: colors.primary[0],
  boxDisabled: colors.gray[1],

  /* Progress
   * These are intended for progress bars, such as percentage complete,
   * time remaining, usage allotment, etc.
   * */
  progressFillNeutral: colors.tertiary[6],
  progressFillNeutralInverse: colors.primary[5],
  progressFillPositive: colors.positive[2],
  progressFillWarning: colors.warning[2],
  progressFillCritical: colors.critical[3],
  progressFillInfo: colors.info[2],
  progressFillDisabled: colors.gray[4],
  progressFillAttract: colors.secondary[4],
  progressFillSubdued: colors.text[5],

  progressEmptyNeutral: colors.tertiary[1],
  progressEmptyNeutralInverse: colors.tertiary[9],
  progressEmptyPositive: colors.positive[0],
  progressEmptyWarning: colors.warning[0],
  progressEmptyCritical: colors.critical[0],
  progressEmptyInfo: colors.info[1],
  progressEmptyDisabled: colors.gray[1],
  progressEmptyAttract: colors.secondary[1],
  progressEmptySubdued: colors.tertiary[1],

  dividerDefault: colors.gray[1],
  dividerHeavy: colors.gray[2],

  ordinalFirst: colors.extended[3],
  ordinalSecond: colors.tertiary[6],
  ordinalThird: colors.gray[3],

  textNeutral: colors.text[7],
  textNeutralInverse: 'white',
  textSubdued: colors.text[5],
  textPositive: colors.positive[3],
  textWarning: colors.warning[3],
  textCritical: colors.critical[3],
  textInfo: colors.info[3],
  textAttract: colors.primary[7],
  textDisabled: colors.text[4],

  link: colors.primary[5],
  linkNeutralInverse: 'white',
  linkVisited: colors.primary[5],
  linkVisitedNeutralInverse: 'white',

  headingNeutral: colors.text[8],
  headingNeutralInverse: 'white',
  headingSubdued: colors.text[6],
  headingPositive: colors.positive[4],
  headingAttract: colors.primary[7],
  headingWarning: colors.warning[4],
  headingCritical: colors.critical[4],
  headingDisabled: colors.text[3],

  navItemDefault: colors.text[6],
  navItemHeading: colors.primary[7],
  linkDefault: colors.primary[4],

  actionAttractText: 'white',
  actionAttractDefault: colors.secondary[5],
  actionAttractHovered: colors.secondary[7],
  actionAttractFocused: colors.secondary[6],
  actionAttractDisabled: colors.secondary[0],
  actionAttractDisabledText: colors.secondary[2],
  actionNeutralText: 'white',
  actionNeutralDefault: colors.primary[5],
  actionNeutralHovered: colors.primary[8],
  actionNeutralFocused: colors.primary[6],
  actionNeutralDisabled: colors.primary[0],
  actionNeutralDisabledText: colors.primary[2],
  actionHollowText: colors.primary[6],
  actionHollowDefault: 'transparent',
  actionHollowHovered: colors.primary[0],
  actionHollowHoveredText: colors.primary[7],
  actionHollowFocused: 'transparent',
  actionHollowFocusedText: colors.primary[6],
  actionHollowDisabled: 'transparent',
  actionHollowDisabledText: colors.primary[1],
  actionLinkText: colors.primary[4],
  actionLinkDefault: 'transparent',
  actionLinkHovered: colors.primary[0],
  actionLinkHoveredText: colors.primary[4],
  actionLinkFocused: colors.primary[0],
  actionLinkFocusedText: colors.primary[7],
  actionLinkDisabled: 'transparent',
  actionLinkDisabledText: colors.primary[2],

  price: colors.primary[6],

  attractFocus: colors.secondary[2],
  neutralFocus: colors.primary[2],

  focusOutline: colors.info[1],

  iconStrokeNeutral: colors.gray[7],
  iconStrokeNeutralInverse: 'white',
  iconStrokePositive: colors.positive[2],
  iconStrokeWarning: colors.warning[3],
  iconStrokeCritical: colors.critical[2],
  iconStrokeInfo: colors.info[3],
  iconStrokeDisabled: colors.gray[2],
  iconStrokeAttract: colors.primary[5],
  iconStrokeSubdued: colors.text[5],

  iconBackgroundNeutral: 'white',
  iconBackgroundNeutralInverse: colors.primary[8],
  iconBackgroundPositive: colors.positive[0],
  iconBackgroundWarning: colors.warning[0],
  iconBackgroundCritical: colors.critical[0],
  iconBackgroundInfo: colors.info[0],
  iconBackgroundDisabled: colors.gray[1],
  iconBackgroundAttract: colors.primary[0],
  iconBackgroundSubdued: colors.tertiary[1],

  inputEnabledLabel: colors.text[7],
  inputEnabledValue: colors.text[8],
  inputEnabledPlaceholder: colors.text[5],
  inputEnabledBorder: colors.gray[3],
  inputEnabledBackground: 'white',

  inputDisabledLabel: colors.text[7],
  inputDisabledValue: colors.text[5],
  inputDisabledPlaceholder: colors.text[5],
  inputDisabledBorder: colors.gray[3],
  inputDisabledBackground: colors.gray[0],

  inputErrorLabel: colors.text[7],
  inputErrorValue: colors.text[8],
  inputErrorPlaceholder: colors.text[5],
  inputErrorBorder: colors.critical[1],
  inputErrorBackground: 'white',

  tableBaseBackground: 'white',
  tableAltBackground: colors.gray[0],

  borderAttract: colors.primary[5],
  borderNeutral: colors.gray[8],
}
