import type { Meta } from "@storybook/react";
import { SlideableStar } from ".";

export default {
  title: "Components/CustomIcons/SlideableStar",
  component: SlideableStar,
  argTypes: {
    percentShown: {
      control: "range",
    },
  },
} as Meta<typeof SlideableStar>;

export const Default = {
  name: "SlideableStar",
};
