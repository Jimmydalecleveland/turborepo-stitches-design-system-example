import type { Meta, StoryObj } from '@storybook/react'
import Text from './Text'

export default {
  title: 'Components/Text',
  component: Text,
} satisfies Meta<typeof Text>

export const Default = {
  args: {
    children: 'The neutral text',
  },
}

export const Sizes: StoryObj<typeof Text> = {
  render: () => {
    return (
      <section>
        <Text size="xs">Text can be `xs`</Text>
        <Text size="sm">Text can be `sm`</Text>
        <Text size="md">Text can be `md`</Text>
        <Text size="lg">Text can be `lg`</Text>
        <Text size="xl">Text can be `xl`</Text>
      </section>
    )
  },

  parameters: {
    controls: {hideNoControlsWarning: true},
  },
}

export const SmallViewportSizes = {
  ...Sizes,

  parameters: {
    viewport: {
      defaultViewport: 'small',
    },
    chromatic: {
      viewports: [360],
    },
    controls: {hideNoControlsWarning: true},
  },
}

export const Weight = {
  args: {
    weight: 'bold',
    children: 'Text can have different weights',
  },
}

export const Vibe = {
  render: () => (
    <div>
      <Text vibe="neutral">Neutral Vibe Text</Text>
      <Text vibe="subdued">Subudued Vibe Text</Text>
      <Text vibe="positive">Positive Vibe Text</Text>
      <Text vibe="warning">Warning Vibe Text</Text>
      <Text vibe="critical">Critical Vibe Text</Text>
      <Text vibe="attract">Attract Vibe Text</Text>

      <hr/>

      <Text size="xl" vibe="neutral">
        Neutral Vibe Text
      </Text>
      <Text size="xl" vibe="subdued">
        Subudued Vibe Text
      </Text>
      <Text size="xl" vibe="positive">
        Positive Vibe Text
      </Text>
      <Text size="xl" vibe="warning">
        Warning Vibe Text
      </Text>
      <Text size="xl" vibe="critical">
        Critical Vibe Text
      </Text>
      <Text size="xl" vibe="attract">
        Attract Vibe Text
      </Text>

      <hr/>

      <Text weight="bold" vibe="neutral">
        Neutral Vibe Text
      </Text>
      <Text weight="bold" vibe="subdued">
        Subdued Vibe Text
      </Text>
      <Text weight="bold" vibe="positive">
        Positive Vibe Text
      </Text>
      <Text weight="bold" vibe="warning">
        Warning Vibe Text
      </Text>
      <Text weight="bold" vibe="critical">
        Critical Vibe Text
      </Text>
      <Text weight="bold" vibe="attract">
        Attract Vibe Text
      </Text>
    </div>
  ),

  parameters: {
    controls: {hideNoControlsWarning: true},
  },
}
