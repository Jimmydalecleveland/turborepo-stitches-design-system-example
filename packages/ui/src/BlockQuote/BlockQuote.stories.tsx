import type { Meta } from "@storybook/react";
import { BlockQuote } from ".";

export default {
  title: "Components/BlockQuote",
  component: BlockQuote,
} satisfies Meta<typeof BlockQuote>;

export const Default = {
  args: {
    children:
      "But that was civilisation, so far as Logen could tell. People with nothing better to do, dreaming up ways to make easy things difficult.",
  },
};
