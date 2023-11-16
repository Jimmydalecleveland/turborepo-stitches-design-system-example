/* This is dumb, but the alternatives I've found are dumber.
 * I want this array to be exactly 10 strings, as every full color set is.
 */
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
  string,
];

type SupportColorArray = readonly [string, string, string, string, string];

/*
 * The primary color is your "brand" color,
 * and is used across all elements. This color
 * can define the overall feel and can elicit emotion.
 */
export const primary: FullColorArray = [
  "hsla(330, 100%, 95%, 1)", // Light Pink
  "hsla(330, 100%, 85%, 1)", // Soft Pink
  "hsla(330, 100%, 75%, 1)", // Bright Pink
  "hsla(330, 100%, 65%, 1)", // Strong Pink
  "hsla(330, 100%, 55%, 1)", // Deep Pink
  "hsla(330, 100%, 45%, 1)", // Dark Pink
  "hsla(330, 100%, 35%, 1)", // Deeper Pink
  "hsla(330, 100%, 25%, 1)", // Very Dark Pink
  "hsla(330, 100%, 15%, 1)", // Almost Black Pink
  "hsla(330, 100%, 5%, 1)", // Near Black
];

/*
 * The secondary color highlights or complements
 * the primary color. These are used sparingly across
 * all interactive elements such as buttons, links, inputs, etc.
 */
export const secondary: FullColorArray = [
  "hsla(260, 100%, 95%, 1)", // Light Purple
  "hsla(260, 100%, 85%, 1)", // Soft Purple
  "hsla(260, 100%, 75%, 1)", // Bright Purple
  "hsla(260, 100%, 65%, 1)", // Strong Purple
  "hsla(260, 100%, 55%, 1)", // Deep Purple
  "hsla(260, 100%, 45%, 1)", // Dark Purple
  "hsla(260, 100%, 35%, 1)", // Deeper Purple
  "hsla(260, 100%, 25%, 1)", // Very Dark Purple
  "hsla(260, 100%, 15%, 1)", // Almost Black Purple
  "hsla(260, 100%, 5%, 1)", // Near Black
];
/*
 * The tertiary color highlights or complements the
 * primary and secondary color. These are to be used
 * to make the UI elements stand out.
 */
export const tertiary: FullColorArray = [
  "hsla(190, 100%, 95%, 1)", // Light Blue
  "hsla(190, 100%, 85%, 1)", // Soft Blue
  "hsla(190, 100%, 75%, 1)", // Bright Blue
  "hsla(190, 100%, 65%, 1)", // Strong Blue
  "hsla(190, 100%, 55%, 1)", // Deep Blue
  "hsla(190, 100%, 45%, 1)", // Dark Blue
  "hsla(190, 100%, 35%, 1)", // Deeper Blue
  "hsla(190, 100%, 25%, 1)", // Very Dark Blue
  "hsla(190, 100%, 15%, 1)", // Almost Black Blue
  "hsla(190, 100%, 5%, 1)", // Near Black
];

/*
 * This is color is used for star ratings.
 */
export const extended: FullColorArray = [
  "hsla(45, 100%, 95%, 1)", // Light Yellow
  "hsla(45, 100%, 85%, 1)", // Soft Yellow
  "hsla(45, 100%, 75%, 1)", // Bright Yellow
  "hsla(45, 100%, 65%, 1)", // Strong Yellow
  "hsla(45, 100%, 55%, 1)", // Deep Yellow
  "hsla(45, 100%, 45%, 1)", // Dark Yellow
  "hsla(45, 100%, 35%, 1)", // Deeper Yellow
  "hsla(45, 100%, 25%, 1)", // Very Dark Yellow
  "hsla(45, 100%, 15%, 1)", // Almost Black Yellow
  "hsla(45, 100%, 5%, 1)", // Near Black
];

/*
 * Gray is a neutral color and should be the majority of each page/design.
 * Think background, form fields, dividers, etc.
 */
export const gray: FullColorArray = [
  "hsla(210, 15%, 94%, 1)", // Very Light Gray
  "hsla(210, 15%, 88%, 1)", // Light Gray
  "hsla(210, 10%, 78%, 1)", // Soft Gray
  "hsla(210, 10%, 68%, 1)", // Medium Gray
  "hsla(210, 10%, 58%, 1)", // Neutral Gray
  "hsla(210, 10%, 48%, 1)", // Dark Gray
  "hsla(210, 15%, 38%, 1)", // Darker Gray
  "hsla(210, 15%, 28%, 1)", // Very Dark Gray
  "hsla(210, 20%, 18%, 1)", // Almost Black
  "hsla(210, 20%, 8%, 1)", // Near Black
];

/*
 * The text colors change in relation to the background color, and
 * vary in intensity depending on the context, such as headlines and bold callouts.
 */
export const text: FullColorArray = [
  "hsla(0, 0%, 100%, 0.9)", // Almost White
  "hsla(0, 0%, 95%, 1)", // Very Light Text
  "hsla(0, 0%, 85%, 1)", // Light Text
  "hsla(0, 0%, 75%, 1)", // Soft Text
  "hsla(0, 0%, 65%, 1)", // Regular Text
  "hsla(0, 0%, 55%, 1)", // Medium Text
  "hsla(0, 0%, 45%, 1)", // Dark Text
  "hsla(0, 0%, 35%, 1)", // Darker Text
  "hsla(0, 0%, 25%, 1)", // Very Dark Text
  "hsla(0, 0%, 15%, 1)", // Almost Black Text
];

/*
 * Positive, Critical, Warning, Info.
 * These are used for alerts, banners, form validation, etc.
 */
export const positive: SupportColorArray = [
  "hsla(145, 60%, 90%, 1)", // Light Green
  "hsla(145, 60%, 75%, 1)", // Soft Green
  "hsla(145, 70%, 55%, 1)", // Vibrant Green
  "hsla(145, 80%, 40%, 1)", // Dark Green
  "hsla(145, 90%, 30%, 1)", // Deep Green
];

export const critical: SupportColorArray = [
  "hsla(360, 80%, 90%, 1)", // Light Red
  "hsla(360, 80%, 75%, 1)", // Soft Red
  "hsla(360, 90%, 60%, 1)", // Bright Red
  "hsla(360, 100%, 40%, 1)", // Dark Red
  "hsla(360, 100%, 25%, 1)", // Deep Red
];

export const warning: SupportColorArray = [
  "hsla(30, 90%, 90%, 1)", // Light Orange
  "hsla(30, 90%, 75%, 1)", // Soft Orange
  "hsla(30, 100%, 60%, 1)", // Bright Orange
  "hsla(30, 100%, 45%, 1)", // Dark Orange
  "hsla(30, 100%, 30%, 1)", // Deep Orange
];

export const info: SupportColorArray = [
  "hsla(210, 90%, 90%, 1)", // Light Blue
  "hsla(210, 90%, 75%, 1)", // Soft Blue
  "hsla(210, 100%, 60%, 1)", // Bright Blue
  "hsla(210, 100%, 45%, 1)", // Dark Blue
  "hsla(210, 100%, 30%, 1)", // Deep Blue
];
