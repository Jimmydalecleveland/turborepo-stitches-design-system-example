import {
  percentToStarRating,
  groupPercentToSinglePercent,
} from "./starRatings";

describe("groupPercentToSinglePercent", () => {
  test("should handle all 0 star scenarios", () => {
    expect(groupPercentToSinglePercent(0, 1)).toBe(0);
    expect(groupPercentToSinglePercent(0, 2)).toBe(0);
    expect(groupPercentToSinglePercent(0, 3)).toBe(0);
    expect(groupPercentToSinglePercent(0, 4)).toBe(0);
    expect(groupPercentToSinglePercent(0, 5)).toBe(0);
  });
  test("should not throw when given a number **not** between 0-100", () => {
    // (2nd value is internal, and can't be passed by user)
    expect(groupPercentToSinglePercent(-30, 1)).toBe(0);
    expect(groupPercentToSinglePercent(348, 5)).toBe(100);
  });
  test("should handle precision scenarios", () => {
    expect(groupPercentToSinglePercent(10, 1)).toBe(50);
    expect(groupPercentToSinglePercent(10, 2)).toBe(0);
    expect(groupPercentToSinglePercent(20, 1)).toBe(100);
    expect(groupPercentToSinglePercent(20, 2)).toBe(0);
    expect(groupPercentToSinglePercent(25, 2)).toBe(25);
    expect(groupPercentToSinglePercent(30, 2)).toBe(50);
    expect(groupPercentToSinglePercent(45, 3)).toBe(25);
    expect(groupPercentToSinglePercent(60, 3)).toBe(100);
    expect(groupPercentToSinglePercent(75, 4)).toBe(75);
    expect(groupPercentToSinglePercent(85, 5)).toBe(25);
  });
  test("should handle each 5 star scenario", () => {
    expect(groupPercentToSinglePercent(100, 1)).toBe(100);
    expect(groupPercentToSinglePercent(100, 2)).toBe(100);
    expect(groupPercentToSinglePercent(100, 3)).toBe(100);
    expect(groupPercentToSinglePercent(100, 4)).toBe(100);
    expect(groupPercentToSinglePercent(100, 5)).toBe(100);
  });
});

describe("percentToStarRating", () => {
  test("general tests", () => {
    expect(percentToStarRating(0)).toBe("0.0");
    expect(percentToStarRating(20)).toBe("1.0");
    expect(percentToStarRating(0.123)).toBe("0.0");
    expect(percentToStarRating(84)).toBe("4.2");
  });
  test("should not round up a whole number", () => {
    // This is because a 5-star rating is a perfect score
    expect(percentToStarRating(99)).toBe("4.9");
  });
});
