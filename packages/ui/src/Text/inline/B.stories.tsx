import type { Meta, StoryObj } from "@storybook/react";
import { B, Text } from "../index";

export default {
  title: "Components/Text/Inline",
  component: B,
} satisfies Meta<typeof B>;

export const BExample: StoryObj<typeof B> = {
  render: (args) => (
    <Text>
      You can use the <B {...args}>{args.children}</B>. Ullam veritatis in qui,
      commodi enim earum obcaecati ipsam necessitatibus perferendis quas,
      mollitia est, sequi quam. Excepturi!
    </Text>
  ),

  args: {
    children: "<B> component to bold text for style reasons",
  },
};
