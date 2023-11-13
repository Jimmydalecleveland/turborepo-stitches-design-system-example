import type { Meta, StoryObj } from "@storybook/react";
import { css } from "../theme/stitches.config";
import * as Icons from "./Icon";
import type { Svg } from "./Svg";

export default {
  title: "Components/Icons",
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
    background: {
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
} as Meta<typeof Svg>;

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
      <Icons.Rocket vibe="positive" background="neutral" size="xl" />
      <Icons.Rocket
        vibe="neutralInverse"
        background="neutralInverse"
        size="xl"
      />
      <Icons.Rocket vibe="positive" background="positive" size="xl" />
      <Icons.Rocket vibe="warning" background="warning" size="xl" />
      <Icons.Rocket vibe="critical" background="critical" size="xl" />
      <Icons.Rocket vibe="info" background="info" size="xl" />
      <Icons.Rocket vibe="disabled" background="disabled" size="xl" />
      <Icons.Rocket vibe="subdued" background="subdued" size="xl" />
    </div>
  ),

  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};
