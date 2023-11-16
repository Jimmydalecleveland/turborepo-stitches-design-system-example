import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "../Box";
import { Heading } from "../Heading";
import { Stack } from "../Stack";
import { breakpointMinWidths } from "../theme/breakpoints";
import { Card } from "../Card";
import { Text } from "../Text";
import { Button } from "../Button";
import { Column, Columns } from ".";

const meta = {
  title: "Components/Columns",
  component: Columns,
  tags: ["autodocs"],
  args: {
    space: "03",
  },
  parameters: {
    chromatic: {
      viewports: [breakpointMinWidths[0], breakpointMinWidths[1]],
    },
  },
} satisfies Meta<typeof Columns>;

export default meta;
type Story = StoryObj<typeof Columns>;

const Template: Story = {
  render: (args) => (
    <Columns {...args}>
      <Column>
        <Box vibe="neutral" shadow="low" padding="03">
          <Heading size="h5" align="center">
            One
          </Heading>
        </Box>
      </Column>
      <Column>
        <Box vibe="neutral" shadow="low" padding="03">
          <Heading size="h5" align="center">
            Two
          </Heading>
        </Box>
      </Column>
      <Column>
        <Box vibe="neutral" shadow="low" padding="03">
          <Heading size="h5" align="center">
            Three
          </Heading>
        </Box>
      </Column>
    </Columns>
  ),
};

export const Minimal: Story = {
  ...Template,
};

export const FixedWidths = {
  render: () => (
    <Stack space="05">
      <Columns space="03" columnedAbove="bp2">
        <Column width="1/5">
          <Box vibe="neutral" shadow="low" padding="03">
            <Heading size="h5" align="center">
              1/5
            </Heading>
          </Box>
        </Column>
        <Column width="1/5">
          <Box vibe="neutral" shadow="low" padding="03">
            <Heading size="h5" align="center">
              1/5
            </Heading>
          </Box>
        </Column>
        <Column width="1/5">
          <Box vibe="neutral" shadow="low" padding="03">
            <Heading size="h5" align="center">
              1/5
            </Heading>
          </Box>
        </Column>
        <Column width="1/5">
          <Box vibe="neutral" shadow="low" padding="03">
            <Heading size="h5" align="center">
              1/5
            </Heading>
          </Box>
        </Column>
        <Column width="1/5">
          <Box vibe="neutral" shadow="low" padding="03">
            <Heading size="h5" align="center">
              1/5
            </Heading>
          </Box>
        </Column>
      </Columns>

      <Columns space="03" columnedAbove="bp2">
        <Column width="1/4">
          <Box vibe="neutral" shadow="low" padding="03">
            <Heading size="h5" align="center">
              1/4
            </Heading>
          </Box>
        </Column>
        <Column width="1/4">
          <Box vibe="neutral" shadow="low" padding="03">
            <Heading size="h5" align="center">
              1/4
            </Heading>
          </Box>
        </Column>
        <Column width="1/4">
          <Box vibe="neutral" shadow="low" padding="03">
            <Heading size="h5" align="center">
              1/4
            </Heading>
          </Box>
        </Column>
        <Column width="1/4">
          <Box vibe="neutral" shadow="low" padding="03">
            <Heading size="h5" align="center">
              1/4
            </Heading>
          </Box>
        </Column>
      </Columns>

      <Columns space="03" columnedAbove="bp2">
        <Column width="1/3">
          <Box vibe="neutral" shadow="low" padding="03">
            <Heading size="h5" align="center">
              1/3
            </Heading>
          </Box>
        </Column>
        <Column width="1/3">
          <Box vibe="neutral" shadow="low" padding="03">
            <Heading size="h5" align="center">
              1/3
            </Heading>
          </Box>
        </Column>
        <Column width="1/3">
          <Box vibe="neutral" shadow="low" padding="03">
            <Heading size="h5" align="center">
              1/3
            </Heading>
          </Box>
        </Column>
      </Columns>

      <Columns space="03" columnedAbove="bp2">
        <Column width="1/2">
          <Box vibe="neutral" shadow="low" padding="03">
            <Heading size="h5" align="center">
              1/2
            </Heading>
          </Box>
        </Column>
        <Column width="1/2">
          <Box vibe="neutral" shadow="low" padding="03">
            <Heading size="h5" align="center">
              1/2
            </Heading>
          </Box>
        </Column>
      </Columns>

      <Columns space="03" columnedAbove="bp2">
        <Column width="2/3">
          <Box vibe="neutral" shadow="low" padding="03">
            <Heading size="h5" align="center">
              2/3
            </Heading>
          </Box>
        </Column>
        <Column width="1/3">
          <Box vibe="neutral" shadow="low" padding="03">
            <Heading size="h5" align="center">
              1/3
            </Heading>
          </Box>
        </Column>
      </Columns>

      <Columns space="03" columnedAbove="bp2">
        <Column width="1/4">
          <Box vibe="neutral" shadow="low" padding="03">
            <Heading size="h5" align="center">
              1/4
            </Heading>
          </Box>
        </Column>
        <Column width="3/4">
          <Box vibe="neutral" shadow="low" padding="03">
            <Heading size="h5" align="center">
              3/4
            </Heading>
          </Box>
        </Column>
      </Columns>

      <Columns space="03" columnedAbove="bp2">
        <Column width="2/5">
          <Box vibe="neutral" shadow="low" padding="03">
            <Heading size="h5" align="center">
              2/5
            </Heading>
          </Box>
        </Column>
        <Column width="3/5">
          <Box vibe="neutral" shadow="low" padding="03">
            <Heading size="h5" align="center">
              3/5
            </Heading>
          </Box>
        </Column>
      </Columns>
    </Stack>
  ),

  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const FluidWidths = {
  render: () => (
    <Stack space="05">
      <Columns space="03" columnedAbove="bp2">
        <Column width="content">
          <Box vibe="neutral" shadow="low" padding="03">
            <Heading size="h5" align="center">
              content
            </Heading>
          </Box>
        </Column>
        <Column>
          <Box vibe="neutral" shadow="low" padding="03">
            <Heading size="h5" align="center">
              fluid
            </Heading>
          </Box>
        </Column>
      </Columns>

      <Columns space="03" columnedAbove="bp2">
        <Column width="1/5">
          <Box vibe="neutral" shadow="low" padding="03">
            <Heading size="h5" align="center">
              1/5
            </Heading>
          </Box>
        </Column>
        <Column>
          <Box vibe="neutral" shadow="low" padding="03">
            <Heading size="h5" align="center">
              fluid
            </Heading>
          </Box>
        </Column>
      </Columns>

      <Columns space="03" columnedAbove="bp2">
        <Column width="1/4">
          <Box vibe="neutral" shadow="low" padding="03">
            <Heading size="h5" align="center">
              1/4
            </Heading>
          </Box>
        </Column>
        <Column>
          <Box vibe="neutral" shadow="low" padding="03">
            <Heading size="h5" align="center">
              fluid
            </Heading>
          </Box>
        </Column>
      </Columns>

      <Columns space="03" columnedAbove="bp2">
        <Column width="1/3">
          <Box vibe="neutral" shadow="low" padding="03">
            <Heading size="h5" align="center">
              1/3
            </Heading>
          </Box>
        </Column>
        <Column>
          <Box vibe="neutral" shadow="low" padding="03">
            <Heading size="h5" align="center">
              fluid
            </Heading>
          </Box>
        </Column>
      </Columns>

      <Columns space="03" columnedAbove="bp2">
        <Column width="2/5">
          <Box vibe="neutral" shadow="low" padding="03">
            <Heading size="h5" align="center">
              2/5
            </Heading>
          </Box>
        </Column>
        <Column>
          <Box vibe="neutral" shadow="low" padding="03">
            <Heading size="h5" align="center">
              fluid
            </Heading>
          </Box>
        </Column>
      </Columns>

      <Columns space="03" columnedAbove="bp2">
        <Column width="1/2">
          <Box vibe="neutral" shadow="low" padding="03">
            <Heading size="h5" align="center">
              1/2
            </Heading>
          </Box>
        </Column>
        <Column>
          <Box vibe="neutral" shadow="low" padding="03">
            <Heading size="h5" align="center">
              fluid
            </Heading>
          </Box>
        </Column>
      </Columns>

      <Columns space="03" columnedAbove="bp2">
        <Column width="3/5">
          <Box vibe="neutral" shadow="low" padding="03">
            <Heading size="h5" align="center">
              3/5
            </Heading>
          </Box>
        </Column>
        <Column>
          <Box vibe="neutral" shadow="low" padding="03">
            <Heading size="h5" align="center">
              fluid
            </Heading>
          </Box>
        </Column>
      </Columns>

      <Columns space="03" columnedAbove="bp2">
        <Column width="2/3">
          <Box vibe="neutral" shadow="low" padding="03">
            <Heading size="h5" align="center">
              2/3
            </Heading>
          </Box>
        </Column>
        <Column>
          <Box vibe="neutral" shadow="low" padding="03">
            <Heading size="h5" align="center">
              fluid
            </Heading>
          </Box>
        </Column>
      </Columns>

      <Columns space="03" columnedAbove="bp2">
        <Column width="3/4">
          <Box vibe="neutral" shadow="low" padding="03">
            <Heading size="h5" align="center">
              3/4
            </Heading>
          </Box>
        </Column>
        <Column>
          <Box vibe="neutral" shadow="low" padding="03">
            <Heading size="h5" align="center">
              fluid
            </Heading>
          </Box>
        </Column>
      </Columns>

      <Columns space="03" columnedAbove="bp2">
        <Column width="4/5">
          <Box vibe="neutral" shadow="low" padding="03">
            <Heading size="h5" align="center">
              4/5
            </Heading>
          </Box>
        </Column>
        <Column>
          <Box vibe="neutral" shadow="low" padding="03">
            <Heading size="h5" align="center">
              fluid
            </Heading>
          </Box>
        </Column>
      </Columns>
    </Stack>
  ),

  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const UnderAndOverFilling: StoryObj<typeof Columns> = {
  render: (args) => (
    <Stack space="05">
      <Columns space="03" columnedAbove="bp2" {...args}>
        <Column width="1/2">
          <Box vibe="neutral" shadow="low" padding="03">
            <Heading size="h5" align="center">
              1/2
            </Heading>
          </Box>
        </Column>
      </Columns>

      <Columns space="03" columnedAbove="bp2" {...args}>
        <Column width="1/2">
          <Box vibe="neutral" shadow="low" padding="03">
            <Heading size="h5" align="center">
              1/2
            </Heading>
          </Box>
        </Column>
        <Column width="1/3">
          <Box vibe="neutral" shadow="low" padding="03">
            <Heading size="h5" align="center">
              1/3
            </Heading>
          </Box>
        </Column>
      </Columns>

      <Columns space="03" columnedAbove="bp2" {...args}>
        <Column width="1/2">
          <Box vibe="neutral" shadow="low" padding="03">
            <Heading size="h5" align="center">
              1/2
            </Heading>
          </Box>
        </Column>
        <Column width="1/3">
          <Box vibe="neutral" shadow="low" padding="03">
            <Heading size="h5" align="center">
              1/3
            </Heading>
          </Box>
        </Column>
        <Column width="1/2">
          <Box vibe="neutral" shadow="low" padding="03">
            <Heading size="h5" align="center">
              1/2
            </Heading>
          </Box>
        </Column>
      </Columns>

      <Columns space="03" columnedAbove="bp2" {...args}>
        <Column width="1/4">
          <Box vibe="neutral" shadow="low" padding="03">
            <Heading size="h5" align="center">
              1/4
            </Heading>
          </Box>
        </Column>
        <Column width="1/4">
          <Box vibe="neutral" shadow="low" padding="03">
            <Heading size="h5" align="center">
              1/4
            </Heading>
          </Box>
        </Column>
        <Column width="1/4">
          <Box vibe="neutral" shadow="low" padding="03">
            <Heading size="h5" align="center">
              1/4
            </Heading>
          </Box>
        </Column>
        <Column width="1/4">
          <Box vibe="neutral" shadow="low" padding="03">
            <Heading size="h5" align="center">
              1/4
            </Heading>
          </Box>
        </Column>
        <Column width="1/4">
          <Box vibe="neutral" shadow="low" padding="03">
            <Heading size="h5" align="center">
              1/4
            </Heading>
          </Box>
        </Column>
      </Columns>
    </Stack>
  ),

  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const Dividers = {
  ...Template,

  args: {
    space: "03",
    dividers: "heavy",
    columnedAbove: "bp2",
  },
};

export const ReversedWhenColumned: StoryObj<typeof Columns> = {
  render: (args) => (
    <Columns {...args} columnedAbove="bp2" reversed>
      <Column>
        <Box vibe="neutral" shadow="low" padding="03">
          <Heading size="h5" align="center">
            One
          </Heading>
        </Box>
      </Column>
      <Column>
        <Box vibe="neutral" shadow="low" padding="03">
          <Heading size="h5" align="center">
            Two
          </Heading>
        </Box>
      </Column>
      <Column>
        <Box vibe="neutral" shadow="low" padding="03">
          <Heading size="h5" align="center">
            Three
          </Heading>
        </Box>
      </Column>
    </Columns>
  ),

  args: {
    space: "03",
  },
};

export const ResponsivelyCollapsed: Story = {
  render: (args) => (
    <Stack space="05">
      <Stack space="02">
        <Heading size="h5">Columned above bp1</Heading>
        <Columns {...args} columnedAbove="bp1">
          <Column>
            <Box vibe="neutral" shadow="low" padding="03">
              <Heading size="h5" align="center">
                One
              </Heading>
            </Box>
          </Column>
          <Column>
            <Box vibe="neutral" shadow="low" padding="03">
              <Heading size="h5" align="center">
                Two
              </Heading>
            </Box>
          </Column>
          <Column>
            <Box vibe="neutral" shadow="low" padding="03">
              <Heading size="h5" align="center">
                Three
              </Heading>
            </Box>
          </Column>
        </Columns>
      </Stack>

      <Stack space="02">
        <Heading size="h5">Columned above bp2</Heading>
        <Columns {...args} columnedAbove="bp2">
          <Column>
            <Box vibe="neutral" shadow="low" padding="03">
              <Heading size="h5" align="center">
                One
              </Heading>
            </Box>
          </Column>
          <Column>
            <Box vibe="neutral" shadow="low" padding="03">
              <Heading size="h5" align="center">
                Two
              </Heading>
            </Box>
          </Column>
          <Column>
            <Box vibe="neutral" shadow="low" padding="03">
              <Heading size="h5" align="center">
                Three
              </Heading>
            </Box>
          </Column>
        </Columns>
      </Stack>

      <Stack space="02">
        <Heading size="h5">Columned above bp3</Heading>
        <Columns {...args} columnedAbove="bp3">
          <Column>
            <Box vibe="neutral" shadow="low" padding="03">
              <Heading size="h5" align="center">
                One
              </Heading>
            </Box>
          </Column>
          <Column>
            <Box vibe="neutral" shadow="low" padding="03">
              <Heading size="h5" align="center">
                Two
              </Heading>
            </Box>
          </Column>
          <Column>
            <Box vibe="neutral" shadow="low" padding="03">
              <Heading size="h5" align="center">
                Three
              </Heading>
            </Box>
          </Column>
        </Columns>
      </Stack>

      <Stack space="02">
        <Heading size="h5">Always collapsed</Heading>
        <Columns {...args} columnedAbove="never">
          <Column>
            <Box vibe="neutral" shadow="low" padding="03">
              <Heading size="h5" align="center">
                One
              </Heading>
            </Box>
          </Column>
          <Column>
            <Box vibe="neutral" shadow="low" padding="03">
              <Heading size="h5" align="center">
                Two
              </Heading>
            </Box>
          </Column>
          <Column>
            <Box vibe="neutral" shadow="low" padding="03">
              <Heading size="h5" align="center">
                Three
              </Heading>
            </Box>
          </Column>
        </Columns>
      </Stack>
    </Stack>
  ),

  parameters: {
    chromatic: {
      viewports: [
        360,
        breakpointMinWidths[0],
        breakpointMinWidths[1],
        breakpointMinWidths[2],
      ],
    },
  },
};

export const CollapsedSpace = {
  ...Template,

  args: {
    space: "09",
    collapsedSpace: "03",
    columnedAbove: "bp2",
  },
};

export const Alignment: Story = {
  render: (args) => (
    <Columns {...args}>
      <Column>
        <Box vibe="neutral" shadow="low" padding="03">
          <Heading size="h5" align="center">
            One
          </Heading>
        </Box>
      </Column>
      <Column>
        <Box vibe="neutral" shadow="low" paddingY="17">
          <Heading size="h5" align="center">
            Two
          </Heading>
        </Box>
      </Column>
    </Columns>
  ),

  args: {
    alignY: "center",
  },

  parameters: {
    chromatic: {
      viewports: [breakpointMinWidths[1]],
    },
  },
};

export const EqualHeightColumns = {
  render: () => (
    <Columns space="03" columnedAbove="bp2" equalHeight>
      <Column width="1/2">
        <Card>
          <Stack space="04" align="center">
            <Heading size="h5">The First Product</Heading>
            <Text>
              This column uses the `fullHeight` prop on `Card` to stretch to the
              max height of all `Columns` children.
            </Text>
            <Button>See more details</Button>
          </Stack>
        </Card>
      </Column>
      <Column width="1/2">
        <Card>
          <Stack space="04" align="center">
            <Heading size="h5">The Second Product</Heading>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
              labore nulla adipisci architecto corporis enim consequatur optio
              exercitationem hic? Consequatur repudiandae quisquam tempora vero
              necessitatibus unde deserunt impedit a! Vero nesciunt, tenetur ex
              iste cupiditate ipsum beatae ad eligendi odit quibusdam facilis
              velit cum, quam praesentium nihil omnis officia reiciendis.
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repudiandae sit perspiciatis eveniet veniam ut atque labore
              nesciunt impedit rem tenetur.
            </Text>
            <Button vibe="attract">See more details</Button>
          </Stack>
        </Card>
      </Column>
    </Columns>
  ),

  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const BreakpointColumnWidths: Story = {
  render: (args) => (
    <Columns {...args}>
      <Column
        width={{
          "@initial": "1/2",
          "@bp1": "1/3",
          "@bp2": "1/4",
          "@bp3": "content",
        }}
      >
        <Box vibe="neutralInverse" shadow="low" padding="03">
          <Heading size="h5" align="center" vibe="neutralInverse">
            One
          </Heading>
        </Box>
      </Column>
      <Column width="fluid">
        <Box vibe="neutral" shadow="low" padding="03">
          <Heading size="h5" align="center">
            Two
          </Heading>
        </Box>
      </Column>
    </Columns>
  ),

  parameters: {
    chromatic: {
      viewports: [
        360,
        breakpointMinWidths[0],
        breakpointMinWidths[1],
        breakpointMinWidths[2],
      ],
    },
  },
};
