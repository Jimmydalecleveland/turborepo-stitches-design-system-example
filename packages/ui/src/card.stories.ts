import type { Meta, StoryObj } from '@storybook/react'
import  Card  from './card'

const meta = {
  title: 'Example/Card',
  component: Card,
} satisfies Meta<typeof Card>;

export default meta

type Story = StoryObj<typeof Card>

export const Default: Story = {
  args: {
    title: "Docs",
    href: "https://turbo.build/repo/docs",
    children: "Find in-depth information about Turborepo features and API.",
  }
}
