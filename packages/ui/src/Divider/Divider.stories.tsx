import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "../Box";
import { Text } from "../Text";
import { Divider } from ".";

const meta = {
  title: "Components/Divider",
  component: Divider,
  argTypes: {
    thickness: {
      options: ["light", "heavy"],
      control: {
        type: "radio",
        labels: {
          light: "light",
          heavy: "heavy",
        },
      },
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof Divider>;

const Template: Story = {
  render: (args) => (
    <div>
      <Text>Above the divider</Text>
      <Divider {...args} />
      <Text>Below the divider</Text>
    </div>
  ),
};

export const Default = {
  ...Template,
  args: {},
};

export const VerticalDividers = () => (
  <Box
    display="flex"
    vibe="neutral"
    padding="06"
    alignItems="center"
    css={{ height: "100px", gap: "$03" }}
  >
    <div style={{ background: "peachpuff" }}>
      <Text>Left</Text>
    </div>
    <Divider />
    <div style={{ background: "papayawhip" }}>
      <Text>Center</Text>
    </div>
    <Divider />
    <div style={{ background: "lemonchiffon" }}>
      <Text>Right</Text>
    </div>
  </Box>
);
