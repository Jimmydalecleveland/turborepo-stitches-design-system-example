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
  "hsl(210, 36%, 96%)",
  "hsl(212, 33%, 89%)",
  "hsl(210, 31%, 80%)",
  "hsl(211, 27%, 70%)",
  "hsl(209, 23%, 60%)",
  "hsl(210, 22%, 49%)",
  "hsl(209, 28%, 39%)",
  "hsl(209, 34%, 30%)",
  "hsl(211, 39%, 23%)",
  "hsl(209, 61%, 16%)",
];

/*
 * The secondary color highlights or complements
 * the primary color. These are used sparingly across
 * all interactive elements such as buttons, links, inputs, etc.
 */
export const secondary: FullColorArray = [
  "hsl(152, 68%, 96%)",
  "hsl(154, 75%, 87%)",
  "hsl(156, 73%, 74%)",
  "hsl(158, 58%, 62%)",
  "hsl(160, 51%, 49%)",
  "hsl(162, 63%, 41%)",
  "hsl(164, 71%, 34%)",
  "hsl(166, 72%, 28%)",
  "hsl(168, 80%, 23%)",
  "hsl(170, 97%, 15%)",
];

/*
 * The tertiary color highlights or complements the
 * primary and secondary color. These are to be used
 * to make the UI elements stand out.
 */
export const tertiary: FullColorArray = [
  "hsl(152, 22%, 96%)",
  "hsl(154, 18%, 87%)",
  "hsl(156, 14%, 74%)",
  "hsl(158, 10%, 62%)",
  "hsl(160, 08%, 49%)",
  "hsl(162, 10%, 41%)",
  "hsl(164, 14%, 34%)",
  "hsl(166, 18%, 28%)",
  "hsl(168, 22%, 23%)",
  "hsl(170, 26%, 15%)",
];

/*
 * This is color is used for star ratings.
 */
export const extended: FullColorArray = [
  "hsla(30, 86%, 93%, 1)",
  "hsla(38, 100%, 83%, 1)",
  "hsla(32, 100%, 73%, 1)",
  "hsla(32, 100%, 65%, 1)",
  "hsla(30, 86%, 62%, 1)",
  "hsla(30, 86%, 49%, 1)",
  "hsla(30, 86%, 42%, 1)",
  "hsla(30, 86%, 33%, 1)",
  "hsla(30, 87%, 22%, 1)",
  "hsla(29, 88%, 11%, 1)",
];

/*
 * Gray is a neutral color and should be the majority of each page/design.
 * Think background, form fields, dividers, etc.
 */
export const gray: FullColorArray = [
  "hsl(216, 33%, 97%)",
  "hsl(214, 15%, 91%)",
  "hsl(210, 16%, 82%)",
  "hsl(211, 13%, 65%)",
  "hsl(211, 10%, 53%)",
  "hsl(211, 12%, 43%)",
  "hsl(209, 14%, 37%)",
  "hsl(209, 18%, 30%)",
  "hsl(209, 20%, 25%)",
  "hsl(210, 24%, 16%)",
];

/*
 * The text colors change in relation to the background color, and
 * vary in intensity depending on the context, such as headlines and bold callouts.
 */
export const text: FullColorArray = [
  "hsl(180, 20%, 97%)",
  "hsl(180, 14%, 91%)",
  "hsl(180, 8%, 82%)",
  "hsl(180, 5%, 65%)",
  "hsl(180, 3%, 53%)",
  "hsl(180, 5%, 43%)",
  "hsl(180, 6%, 37%)",
  "hsl(180, 8%, 30%)",
  "hsl(180, 14%, 25%)",
  "hsl(180, 20%, 16%)",
];

/*
 * Positive, Critical, Warning, Info.
 * These are used for alerts, banners, form validation, etc.
 */
export const positive: SupportColorArray = [
  "hsla(152, 68%, 96%, 1)",
  "hsla(156, 73%, 74%, 1)",
  "hsla(160, 51%, 49%, 1)",
  "hsla(164, 71%, 34%, 1)",
  "hsla(170, 97%, 15%, 1)",
];

export const critical: SupportColorArray = [
  "hsla(360, 100%, 95%, 1)",
  "hsla(360, 100%, 80%, 1)",
  "hsla(356, 75%, 53%, 1)",
  "hsla(352, 90%, 35%, 1)",
  "hsla(348, 94%, 20%, 1)",
];

export const warning: SupportColorArray = [
  "hsla(58, 94%, 91%, 1)",
  "hsla(54, 100%, 69%, 1)",
  "hsla(50, 94%, 50%, 1)",
  "hsla(45, 100%, 40%, 1)",
  "hsla(40, 100%, 26%, 1)",
];

export const info: SupportColorArray = [
  "hsla(180, 100%, 92%, 1)",
  "hsla(192, 100%, 79%, 1)",
  "hsla(192, 100%, 45%, 1)",
  "hsla(194, 100%, 37%, 1)",
  "hsla(199, 100%, 25%, 1)",
];
