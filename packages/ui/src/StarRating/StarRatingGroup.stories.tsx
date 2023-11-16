import type { Meta } from "@storybook/react";
import { StarRatingGroup } from ".";

export default {
  title: "Components/StarRating/StarRatingGroup",
  component: StarRatingGroup,
} as Meta<typeof StarRatingGroup>;

export const Minimal = {
  args: {
    title: "Product Rating",
    percent: 50,
    count: 555,
  },
};

export const StackTitle = {
  args: {
    ...Minimal.args,
    stackTitle: true,
  },
};
