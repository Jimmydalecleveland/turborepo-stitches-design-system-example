import type { Meta, StoryObj } from '@storybook/react'
import Button from './Button'

const meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {onClick: {action: true}},
} satisfies Meta<typeof Button>

export default meta
/**
 * This type allows properties like `play` to be typed correctly.
 * It also types the props correctly to the component, otherwise,
 * they are just inferred. Try removing the `Story` type from any
 * object and see what `children` looks like. It should say "string",
 * when it should be "ReactNode".
 */
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'CLICK ME!',
  },
}

