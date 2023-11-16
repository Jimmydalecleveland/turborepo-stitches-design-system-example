import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { Box } from "../Box";
import { Stack } from ".";

const meta = {
  title: "Components/Stack",
  component: Stack,
  tags: ["autodocs"],
  argTypes: {
    dividers: {
      control: "radio",
      options: [false, "light", "heavy"],
    },
  },
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof Stack>;

const Template: Story = {
  render: (args) => (
    <Stack {...args}>
      <Box padding="02" vibe="neutral" shadow="medium">
        div 1
      </Box>
      <Box padding="02" vibe="neutral" shadow="medium">
        div 2
      </Box>
      <Box padding="02" vibe="neutral" shadow="medium">
        div 3
      </Box>
    </Stack>
  ),
};

export const Default: Story = {
  ...Template,

  args: {
    space: "03",
  },
};

export const WithDividers: Story = {
  ...Template,

  args: {
    space: "03",
    dividers: "light",
  },
};

export const CenterAlignedWithDividers: Story = {
  ...Template,

  args: {
    space: "05",
    align: "center",
    dividers: "heavy",
  },
};

export const ConditionalChild: Story = {
  render: (args) => (
    <Stack {...args}>
      <Box padding="02" vibe="neutral" shadow="medium">
        div 1
      </Box>
      <Box padding="02" vibe="neutral" shadow="medium">
        div 2
      </Box>
      {/* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition,no-constant-condition -- This is a purposeful test of Stack not rendering unintended elements from conditionals */}
      {false ? (
        <Box padding="02" vibe="neutral" shadow="medium">
          div 3
        </Box>
      ) : null}
    </Stack>
  ),

  args: {
    space: "04",
    dividers: "light",
  },
};

export const ReactFragmentChild: Story = {
  render: (args) => (
    <Stack {...args}>
      <>
        <Box padding="02" vibe="neutral" shadow="medium">
          div 1
        </Box>
        <Box padding="02" vibe="neutral" shadow="medium">
          div 2
        </Box>
        {/* eslint-disable-next-line react/jsx-fragments -- We want to test that both fragment shorthand and React.Fragment work */}
        <React.Fragment>
          <Box padding="02" vibe="neutral" shadow="medium">
            div 3 (React.Fragment wrapped)
          </Box>
          <Box padding="02" vibe="neutral" shadow="medium">
            div 4 (React.Fragment wrapped)
          </Box>
        </React.Fragment>

        {/* The following should not show or render an extra divider */}
        {/* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition,no-constant-condition -- This is a purposeful test of Stack not rendering unintended elements from conditionals */}
        {false ? (
          <>
            <Box padding="02" vibe="neutral" shadow="medium">
              div 5
            </Box>
            <Box padding="02" vibe="neutral" shadow="medium">
              div 6
            </Box>
          </>
        ) : null}
      </>
    </Stack>
  ),

  args: {
    space: "04",
    dividers: "light",
  },
};
