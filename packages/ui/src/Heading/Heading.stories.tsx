import type { Meta, StoryObj } from "@storybook/react";
import Heading from "./Heading";

const meta = {
  title: "Components/Heading",
  component: Heading,
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    children: "The Neutral text",
  },
};

export const Sizes: StoryObj<typeof Heading> = {
  render: () => {
    return (
      <section>
        <Heading size="h1">Heading can be `h1`</Heading>
        <Heading size="h2">Heading can be `h2`</Heading>
        <Heading size="h3">Heading can be `h3`</Heading>
        <Heading size="h4">Heading can be `h4`</Heading>
        <Heading size="h5">Heading can be `h5`</Heading>
        <Heading size="display">Heading can be `display`</Heading>
        <Heading size="overline">Heading can be `overline`</Heading>
      </section>
    );
  },

  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const SmallViewportSizes: Story = {
  ...Sizes,

  parameters: {
    viewport: {
      defaultViewport: "small",
    },
    chromatic: {
      viewports: [360],
    },
    controls: { hideNoControlsWarning: true },
  },
};

export const Weight: Story = {
  args: {
    weight: "regular",
    children: "Heading can have different weights",
  },
};

export const Vibe: Story = {
  render: () => (
    <div>
      <Heading size="h5" vibe="neutral">
        Neutral Vibe Heading
      </Heading>
      <Heading size="h5" vibe="subdued">
        Subdued Vibe Heading
      </Heading>
      <Heading size="h5" vibe="positive">
        Positive Vibe Heading
      </Heading>
      <Heading size="h5" vibe="warning">
        Warning Vibe Heading
      </Heading>
      <Heading size="h5" vibe="critical">
        Critical Vibe Heading
      </Heading>
      <Heading size="h5" vibe="attract">
        Attract Vibe Heading
      </Heading>

      <hr />

      <Heading vibe="neutral" weight="light">
        Neutral Vibe Heading
      </Heading>
      <Heading vibe="subdued" weight="light">
        Subdued Vibe Heading
      </Heading>
      <Heading vibe="positive" weight="light">
        Positive Vibe Heading
      </Heading>
      <Heading vibe="warning" weight="light">
        Positive Vibe Heading
      </Heading>
      <Heading vibe="critical" weight="light">
        attract Vibe Heading
      </Heading>
      <Heading vibe="attract" weight="light">
        Attract Vibe Heading
      </Heading>

      <hr />

      <Heading size="h5" weight="medium" vibe="neutral">
        Neutral Vibe Heading
      </Heading>
      <Heading size="h5" weight="medium" vibe="subdued">
        Subdued Vibe Heading
      </Heading>
      <Heading size="h5" weight="medium" vibe="positive">
        Positive Vibe Heading
      </Heading>
      <Heading size="h5" weight="medium" vibe="warning">
        Positive Vibe Heading
      </Heading>
      <Heading size="h5" weight="medium" vibe="critical">
        attract Vibe Heading
      </Heading>
      <Heading size="h5" weight="medium" vibe="attract">
        Attract Vibe Heading
      </Heading>
    </div>
  ),

  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};
