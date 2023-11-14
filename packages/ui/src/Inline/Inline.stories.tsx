import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "../Box";
import { Inline } from ".";

export default {
  title: "Components/Inline",
  component: Inline,
} as Meta<typeof Inline>;

export const MinimalExample = {
  args: {
    children: (
      <>
        <Box vibe="neutral" padding="03">
          One
        </Box>
        <Box vibe="positive" padding="03">
          Two
        </Box>
        <Box vibe="neutral" padding="03">
          Three
        </Box>
      </>
    ),
  },
};

export const TallExampleForAlignY: StoryObj<typeof Inline> = {
  render: (args) => (
    <Inline {...args}>
      <Box vibe="neutral" padding="03">
        One
      </Box>
      <Box vibe="positive" padding="03">
        Two
      </Box>
      <Box vibe="neutral" padding="03">
        Three
      </Box>
      <Box paddingY="10" paddingX="01" vibe="positive">
        Don&apos;t mind me
      </Box>
    </Inline>
  ),

  args: {
    alignY: "center",
  },
};

export const BreakpointAlignment: StoryObj<typeof Inline> = {
  ...MinimalExample,
  args: {
    ...MinimalExample.args,
    alignX: { '@initial': 'center', '@bp2': 'left' }
  }
}

