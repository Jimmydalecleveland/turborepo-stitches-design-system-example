import type { Meta, StoryObj } from "@storybook/react";
import { css } from "../theme/stitches.config";
import type { Svg } from "./Svg";
import * as Icons from ".";

export default {
  title: "Components/Icons",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  // TODO: figure out how to get Storybook to automatically infer
  // these options from our Types
  argTypes: {
    size: {
      control: "radio",
      options: ["tag", "xs", "sm", "md", "lg", "xl"],
    },
    vibe: {
      control: "select",
      options: [
        "neutral",
        "neutralInverse",
        "subdued",
        "disabled",
        "attract",
        "positive",
        "warning",
        "critical",
        "info",
      ],
    },
    backgroundVibe: {
      control: "select",
      options: [
        "neutral",
        "neutralInverse",
        "subdued",
        "disabled",
        "attract",
        "positive",
        "warning",
        "critical",
        "info",
      ],
    },
  },
} satisfies Meta<typeof Svg>;

const iconGrid = css({
  display: "flex",
  flexWrap: "wrap",
  gap: "$05",
});

export const AllIcons: StoryObj<typeof Svg> = {
  render: (args) => (
    <div className={iconGrid()}>
      {Object.entries(Icons).map(([, Icon]) => (
        <Icon key={Icon.name} {...args} />
      ))}
    </div>
  ),

  args: {
    vibe: "neutral",
    size: "lg",
  },
};

export const IconBackgroundComparison = {
  render: () => (
    <div className={iconGrid()}>
      <Icons.Rocket vibe="positive" size="xl" />
      <Icons.Rocket vibe="positive" backgroundVibe="neutral" size="xl" />
      <Icons.Rocket
        vibe="neutralInverse"
        backgroundVibe="neutralInverse"
        size="xl"
      />
      <Icons.Rocket vibe="positive" backgroundVibe="positive" size="xl" />
      <Icons.Rocket vibe="warning" backgroundVibe="warning" size="xl" />
      <Icons.Rocket vibe="critical" backgroundVibe="critical" size="xl" />
      <Icons.Rocket vibe="info" backgroundVibe="info" size="xl" />
      <Icons.Rocket vibe="disabled" backgroundVibe="disabled" size="xl" />
      <Icons.Rocket vibe="subdued" backgroundVibe="subdued" size="xl" />
    </div>
  ),

  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};
