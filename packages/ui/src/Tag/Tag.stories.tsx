import type { Meta } from "@storybook/react";
import { Stack } from "../Stack";
import { Check, Download, XMark } from "../Icon";
import { Box } from "../Box";
import { Tag } from ".";

export default {
  title: "Components/Tag",
  component: Tag,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Tag>;

export const Default = {
  args: {
    children: "Label",
  },
};

export const WithIcon = {
  args: {
    children: "Label",
    vibe: "critical",
    RightIcon: XMark,
  },
};

export const WithBothIcons = {
  args: {
    children: "Label",
    vibe: "positive",
    LeftIcon: Check,
    RightIcon: Download,
  },
};

export const WithOnlyIcon = {
  args: {
    vibe: "critical",
    LeftIcon: XMark,
  },
};

export const AllVibes = {
  render: () => (
    <Stack space="05">
      <Tag RightIcon={XMark} vibe="neutral">
        Neutral
      </Tag>
      <Tag RightIcon={XMark} vibe="neutralInverse">
        Neutral Inverse
      </Tag>
      <Tag RightIcon={XMark} vibe="disabled">
        Disabled
      </Tag>
      <Tag RightIcon={XMark} vibe="attract">
        Attract
      </Tag>
      <Tag RightIcon={Check} vibe="positive">
        Positive
      </Tag>
      <Tag RightIcon={Download} vibe="warning">
        Warning
      </Tag>
      <Tag RightIcon={XMark} vibe="critical">
        Critical
      </Tag>
      <Tag RightIcon={Download} vibe="info">
        Info
      </Tag>
      <Box
        display="inlineBlock"
        vibe="neutral"
        padding="03"
        shadow="low"
        corners="rounder"
      >
        <Tag vibe="subdued" RightIcon={Download}>
          Subdued
        </Tag>
      </Box>
    </Stack>
  ),

  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};
