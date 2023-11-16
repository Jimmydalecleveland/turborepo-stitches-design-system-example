import { Inline } from "../Inline";
import { Stack } from "../Stack";
import { Text } from "../Text";
import type { StarRatingProps } from "./StarRating";
import StarRating from "./StarRating";

export interface StarRatingGroupProps extends StarRatingProps {
  title?: string;
  count?: number;
  stackTitle?: boolean;
}

const StarRatingGroup = ({
  css,
  percent,
  starSize,
  showNumber,
  rank,
  title,
  count,
  stackTitle = false,
}: StarRatingGroupProps) => {
  const composedTitle = title && <Text size="sm">{title}</Text>;
  const composedStarRating = (
    <StarRating
      percent={percent}
      starSize={starSize}
      showNumber={showNumber}
      rank={rank}
    />
  );
  const composedCount = (count === 0 || count) && (
    <Text size="xs" weight="medium" vibe="subdued">
      ({count})
    </Text>
  );

  return stackTitle ? (
    <Stack css={css}>
      {composedTitle}
      <Inline space="01">
        {composedStarRating}
        {composedCount}
      </Inline>
    </Stack>
  ) : (
    <Inline space="01" css={css}>
      {composedTitle}
      {/* This extra wrapper ensures that `count` doesn't wrap on it's own */}
      <Inline space="01">
        {composedStarRating}
        {composedCount}
      </Inline>
    </Inline>
  );
};

export default StarRatingGroup;
