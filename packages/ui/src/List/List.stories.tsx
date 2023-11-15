import type { Meta, StoryObj } from "@storybook/react";
import { Check } from "../Icon";
import { Stack } from "../Stack";
import { Text } from "../Text";
import { breakpointMinWidths } from "../theme/breakpoints";
import { List } from ".";

const meta = {
  title: "Components/List",
  component: List,
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof List>;

const Template: Story = {
  render: (args) => (
    <List {...args}>
      <Text>List item 1</Text>
      <Text>List item 2</Text>
      <Text>List item 3</Text>
    </List>
  ),
};

export const Minimal = {
  ...Template,
};

export const WithIcons = {
  ...Template,

  args: {
    Icon: <Check size="sm" vibe="positive" />,
    space: "03",
  },
};

export const WithMultipleLineOfText = {
  render: () => (
    <List space="02" Icon={<Check />}>
      <Stack>
        <Text size="lg" weight="bold">
          Feature One
        </Text>
        <Text>Multiple lines are supported</Text>
      </Stack>
      <Stack>
        <Text size="lg" weight="bold">
          Feature Two
        </Text>
        <Text>Just pass a series of Stacks to List</Text>
      </Stack>
      <Stack>
        <Text size="lg" weight="bold">
          Feature Three
        </Text>
        <Text>The content also does not wrap under the icon/bullet</Text>
      </Stack>
    </List>
  ),

  parameters: {
    chromatic: {
      viewports: [breakpointMinWidths[0]],
    },
    controls: { hideNoControlsWarning: true },
  },
};
