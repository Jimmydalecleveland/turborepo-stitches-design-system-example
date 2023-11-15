import type { Meta, StoryObj } from "@storybook/react";
import { expect } from "@storybook/jest";
import { userEvent, within } from "@storybook/testing-library";
import { Column, Columns } from "../Columns";
import { Stack } from "../Stack";
import { ChevronDown, Rocket, ThumbsUp } from "../Icon";
import { Text } from "../Text";
import Button from "./Button";
import AnchorButton from "./AnchorButton";

const meta = {
  title: "Components/Button",
  component: Button,
  argTypes: { onClick: { action: true } },
} satisfies Meta<typeof Button>;

export default meta;
/**
 * This type allows properties like `play` to be typed correctly.
 * It also types the props correctly to the component, otherwise,
 * they are just inferred. Try removing the `Story` type from any
 * object and see what `children` looks like. It should say "string",
 * when it should be "ReactNode".
 */
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "CLICK ME!",
  },
};

export const FullWidth: Story = {
  args: {
    children: "CLICK ME!",
    isFullWidth: true,
  },
};

export const Interactions: Story = {
  args: {
    size: "large",
    children: "CLICK ME!",
  },

  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole("button");
    await userEvent.hover(button);
    await userEvent.click(button);

    await expect(args.onClick).toHaveBeenCalled();
  },
};

export const Vibes = {
  render: () => (
    <Columns space="03">
      <Column>
        <Stack space="03">
          <Button vibe="attract">Attract</Button>
          <Button vibe="neutral">Neutral</Button>
          <Button variant="hollow">Hollow</Button>
          <Button variant="link">Link</Button>
        </Stack>
      </Column>
      <Column>
        <Stack space="03">
          <Button vibe="attract" disabled>
            Attract (disabled)
          </Button>
          <Button vibe="neutral" disabled>
            Neutral (disabled)
          </Button>
          <Button variant="hollow" disabled>
            Hollow (disabled)
          </Button>
          <Button variant="link" disabled>
            Link (disabled)
          </Button>
        </Stack>
      </Column>
    </Columns>
  ),

  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const WithIcons = {
  render: () => (
    <Stack space="03">
      <Button LeftIcon={ThumbsUp}>Like</Button>
      <Button RightIcon={Rocket} vibe="attract">
        Vroooom!
      </Button>
      <Button
        LeftIcon={Rocket}
        RightIcon={Rocket}
        vibe="neutral"
        variant="hollow"
      >
        Vroooom!
      </Button>
      <Button LeftIcon={Rocket} vibe="attract" disabled>
        Vroooom!
      </Button>
      <Button RightIcon={ChevronDown} variant="link">
        Show all details
      </Button>
      <Button
        LeftIcon={Rocket}
        RightIcon={Rocket}
        vibe="neutral"
        variant="hollow"
        isFullWidth
      >
        Full Width Vroooom!
      </Button>
      <Stack space="03">
        <Text weight="bold" size="lg">
          Sizes (icons are automatically sized to button)
        </Text>
        <Button size="small" RightIcon={Rocket}>
          Vroom?
        </Button>
        <Button size="large" RightIcon={Rocket}>
          Vrooom.
        </Button>
      </Stack>
    </Stack>
  ),

  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const ButtonAsAnchor = {
  render: () => (
    <Columns space="03">
      <Column>
        <Stack space="03">
          <Text size="lg" weight="bold">
            anchor tag
          </Text>
          <AnchorButton href="/" vibe="attract">
            Attract
          </AnchorButton>
          <AnchorButton href="/" vibe="neutral">
            Neutral
          </AnchorButton>
          <AnchorButton href="/" variant="hollow">
            Hollow
          </AnchorButton>
          <AnchorButton href="/" variant="link">
            Link
          </AnchorButton>
          <AnchorButton
            href="/"
            LeftIcon={Rocket}
            RightIcon={Rocket}
            vibe="neutral"
            variant="hollow"
          >
            Vroooom!
          </AnchorButton>
          <AnchorButton href="/" vibe="neutral" isFullWidth>
            Full Width
          </AnchorButton>
        </Stack>
      </Column>
      <Column>
        <Stack space="03">
          <Text size="lg" weight="bold">
            button tag
          </Text>
          <Button vibe="attract">Attract</Button>
          <Button vibe="neutral">Neutral</Button>
          <Button variant="hollow">Hollow</Button>
          <Button variant="link">Link</Button>
          <Button
            LeftIcon={Rocket}
            RightIcon={Rocket}
            vibe="neutral"
            variant="hollow"
          >
            Vroooom!
          </Button>
          <Button vibe="neutral" isFullWidth>
            Full Width
          </Button>
        </Stack>
      </Column>
    </Columns>
  ),

  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};
