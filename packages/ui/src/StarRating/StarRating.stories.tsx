import type { Meta } from "@storybook/react";
import { StarRating } from ".";

export default {
  title: "Components/StarRating",
  component: StarRating,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    percent: {
      control: "range",
    },
  },
} satisfies Meta<typeof StarRating>;

export const Default = {
  args: {
    percent: 50,
  },
};

export const WithNumberLabel = {
  args: {
    percent: 61,
    showNumber: true,
  },
};

export const LargeStars = {
  args: {
    percent: 70,
    starSize: "large",
    showNumber: true,
  },
};

export const FullRange = {
  render: () => (
    <>
      <StarRating percent={0} />
      <StarRating percent={10} />
      <StarRating percent={20} />
      <StarRating percent={30} />
      <StarRating percent={40} />
      <StarRating percent={50} />
      <StarRating percent={60} />
      <StarRating percent={70} />
      <StarRating percent={80} />
      <StarRating percent={90} />
      <StarRating percent={100} />
    </>
  ),

  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};
