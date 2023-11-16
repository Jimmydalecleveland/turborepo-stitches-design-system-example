import * as React from "react";
import { Text } from "../Text";
import type { CSS } from "../theme/stitches.config";
import {
  AMOUNT_OF_STARS,
  groupPercentToSinglePercent,
  percentToStarRating,
} from "../utils/starRatings";
import SlideableStar, { type StarSizes } from "./SlideableStar";
import * as Styled from "./StarRating.styles";

export interface StarRatingProps {
  css?: CSS;
  percent: number;
  starSize?: StarSizes;
  showNumber?: boolean;
  rank?: Styled.OrdinalVariant;
}

const textSizeMap = {
  small: "sm",
  medium: "md",
  large: "lg",
} as const;

const StarRating = ({
  css,
  percent = 0,
  starSize = "small",
  showNumber = false,
  rank = "primary",
}: StarRatingProps) => {
  // TODO: probably want to log an error if the percent is not between 0 and 100,
  // but I don't think we want to throw.

  // This id is unique to each star rating component. It is used by the svg clipPaths
  // to target the star svg in order to show the correct amount on each star.
  const ratingId = React.useId();
  const numberRating = percentToStarRating(percent);

  return (
    <Styled.StarRating css={css} starSize={starSize}>
      {showNumber ? (
        <Text weight="heavy" size={textSizeMap[starSize]}>
          {numberRating}
        </Text>
      ) : null}
      {[...Array(AMOUNT_OF_STARS).keys()].map((_, i) => (
        <SlideableStar
          // eslint-disable-next-line react/no-array-index-key -- This list never reorders or changes length.
          key={i}
          id={`rating-${ratingId}${i + 1}`}
          percentShown={groupPercentToSinglePercent(percent, i + 1)}
          starSize={starSize}
          rank={rank}
        />
      ))}
    </Styled.StarRating>
  );
};

export default StarRating;
