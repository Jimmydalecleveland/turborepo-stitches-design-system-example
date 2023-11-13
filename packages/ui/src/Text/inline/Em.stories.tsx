import type { Meta, StoryObj } from "@storybook/react";
import { Em, Text } from "../index";

export default {
  title: "Components/Text/Inline",
  component: Em,
} as Meta<typeof Em>;

export const EmExample: StoryObj<typeof Em> = {
  render: (args) => (
    <Text>
      You can use the <Em {...args}>{args.children}</Em>. Ullam veritatis in
      qui, commodi enim earum obcaecati ipsam necessitatibus perferendis quas,
      mollitia est, sequi quam. Excepturi!
    </Text>
  ),

  args: {
    children: "<Em> component to give text a strong emphasis",
  },
};
