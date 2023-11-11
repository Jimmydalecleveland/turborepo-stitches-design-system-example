import type { Meta } from '@storybook/react'
import { Box } from '.'

export default {
  title: 'Components/Box',
  component: Box,
} as Meta<typeof Box>

export const Default = {
  args: {
    children: 'I am a box',
  },
}

export const VibeBox = {
  args: {
    as: 'span',
    corners: 'round',
    padding: '04',
    vibe: 'positive',
    children: 'I have positive vibes',
  },
}

export const Padded = {
  args: {
    display: 'inlineBlock',
    vibe: 'warning',
    corners: 'rounder',
    padding: '01',
    paddingX: '10',
    paddingLeft: '04',
    children: 'Mixed and matched padding',
  },
}

export const CardStyledBox = {
  args: {
    display: 'inlineBlock',
    corners: 'rounder',
    vibe: 'neutral',
    shadow: 'medium',
    padding: '03',
    children: 'I am such a card',
  },
}
