import type { Meta, StoryObj } from "@storybook/react";
import { Strong, Text } from "../index";

export default {
  title: "Components/Text/Inline",
  component: Strong,
} as Meta<typeof Strong>;

export const StrongExample: StoryObj<typeof Strong> = {
  render: (args) => (
    <Text>
      You can use the <Strong {...args}>{args.children}</Strong>. Ullam
      veritatis in qui, commodi enim earum obcaecati ipsam necessitatibus
      perferendis quas, mollitia est, sequi quam. Excepturi!
    </Text>
  ),

  args: {
    children: "<Strong> component to give text great importance",
  },
};
