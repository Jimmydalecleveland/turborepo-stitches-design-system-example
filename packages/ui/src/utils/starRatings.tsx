/**
 * Supporting star ratings other than 5 max seems unlikely.
 * This constant is purely for readability, as changing it would
 * change the StarRating component's behavior for all websites/users.
 */
export const AMOUNT_OF_STARS = 5;

/**
 * Gives a star rating equivalent (defaulting to 5 stars) based on a percentage
 * When aggregating ratings, percentages are easier to store and work with overall,
 * but they need to be converted to star ratings for display at some point.
 *
 * When ratings are involved, we never want to round up because that would make a
 * rating of 4.96 look like 5 stars (a perfect score).
 *
 * @param percent - The percentage of stars that should be filled in
 * @param maxStars - The maximum stars possible
 * @returns The max star equivalent, truncated to a single decimal, of the percent input
 *
 * @example
 * percentToMaxStars(20) // '1.0'
 * percentToMaxStars(99) // '4.9'
 * percentToMaxStars(99, 5) // '4.9'
 */

export const percentToStarRating = (
  percent: number,
  maxStars: number = AMOUNT_OF_STARS,
): string => {
  const rating = percent / (100 / maxStars);
  const singleDecimalRating = Math.trunc(rating * 10) / 10;
  return singleDecimalRating.toFixed(1);
};

export function groupPercentToSinglePercent(
  percent: number,
  starNumber: number,
) {
  return Math.min(
    Math.max(
      AMOUNT_OF_STARS * 100 * (percent / 100) - 100 * (starNumber - 1),
      0,
    ),
    100,
  );
}
