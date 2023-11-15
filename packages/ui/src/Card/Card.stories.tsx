import type { Meta } from "@storybook/react";
import { Text } from "../Text";
import { Stack } from "../Stack";
import { breakpointMinWidths } from "../theme/breakpoints";
import { Card } from ".";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    corners: {
      control: "radio",
      options: ["sharp", "round", "rounder", "roundest", "full"],
    },
  },
} as Meta<typeof Card>;

export const Default = {
  args: {
    children: "I am a Card",
  },
};

export const SpacingSizes = {
  render: () => (
    <Stack space="03">
      <Card spaceSize="small">
        <Text size="lg" weight="heavy">
          small spaced Card
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
          iusto perspiciatis animi dignissimos laborum tenetur provident
          quibusdam aliquam qui in aperiam ullam harum, necessitatibus
          temporibus mollitia blanditiis unde cum porro!
        </Text>
      </Card>
      <Card spaceSize="medium">
        <Text size="lg" weight="heavy">
          medium spaced Card
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
          iusto perspiciatis animi dignissimos laborum tenetur provident
          quibusdam aliquam qui in aperiam ullam harum, necessitatibus
          temporibus mollitia blanditiis unde cum porro!
        </Text>
      </Card>
      <Card spaceSize="large">
        <Text size="lg" weight="heavy">
          large spaced Card
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
          iusto perspiciatis animi dignissimos laborum tenetur provident
          quibusdam aliquam qui in aperiam ullam harum, necessitatibus
          temporibus mollitia blanditiis unde cum porro!
        </Text>
      </Card>
    </Stack>
  ),

  parameters: {
    chromatic: {
      viewports: [360, breakpointMinWidths[1]],
    },
    controls: { hideNoControlsWarning: true },
  },
};

export const WithHeaderContent = {
  args: {
    headerContent: <Card.Header text="Featured Item" />,
    children: "I am a Card",
  },
};
