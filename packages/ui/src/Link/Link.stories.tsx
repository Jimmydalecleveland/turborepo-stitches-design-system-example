import type { StoryObj, Meta } from "@storybook/react";
import { Box } from "../Box";
import { Button } from "../Button";
import { Card } from "../Card";
import { ArrowRight, Rocket } from "../Icon";
import { Inline } from "../Inline";
import { Stack } from "../Stack";
import { Text } from "../Text";
import { Link, SpaLink } from "./index";

export default {
  title: "Components/Link",
  component: Link,
} as Meta<typeof Link>;

export const Minimal = {
  args: {
    children: "I am the Link Component",
    href: "#/example",
  },
};

export const OnInverseBackground = () => (
  <Box vibe="neutralInverse" padding="03" corners="round">
    <Link href="/#example" vibe="neutralInverse">
      I am the Inverse Link Component
    </Link>
  </Box>
);

export const InsideText: StoryObj<typeof Link> = {
  render: ({ children, ...args }) => (
    <Text>
      Links will take on the same size as the text they reside in by default,{" "}
      <Link {...args}>{children}</Link>. Delectus odit debitis eligendi,
      repellendus laborum animi!
    </Text>
  ),

  args: {
    children: "Like So",
    href: "/#example",
    target: "_blank",
  },
};

export const InsideTextCustomSize: StoryObj<typeof Link> = {
  render: ({ children, ...args }) => (
    <Text>
      Links can also have a size property passed to{" "}
      <Link {...args}>{children}</Link> text is making them. Delectus odit
      debitis eligendi, repellendus laborum animi!
    </Text>
  ),

  args: {
    children: "override the size",
    href: "/#example",
    target: "_blank",
    size: "lg",
  },
};

export const IconExamples = {
  render: () => (
    <Card>
      <Stack space="03">
        <Link href="/#example" target="_blank" RightIcon={ArrowRight}>
          Right icon example
        </Link>
        <Link href="/#example" target="_blank" LeftIcon={ArrowRight}>
          Left icon example
        </Link>
        <Link
          href="/#example"
          target="_blank"
          LeftIcon={Rocket}
          RightIcon={ArrowRight}
        >
          Both icons example
        </Link>
        <Text>
          Icons can be used when the Link is{" "}
          <Link href="/#example" target="_blank" LeftIcon={Rocket}>
            within a line of text
          </Link>
          , but the alignment might be thrown off a bit. . Delectus odit debitis
          eligendi, repellendus laborum animi!
        </Text>
        <Stack space="01">
          <Text weight="bold">Common example: inlined with a button</Text>
          <Inline alignX="between">
            <Button size="small" variant="hollow" LeftIcon={Rocket}>
              Need Help?
            </Button>
            <Link href="/#example" target="_blank" RightIcon={ArrowRight}>
              See full details
            </Link>
          </Inline>
        </Stack>
      </Stack>
    </Card>
  ),

  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const SinglePageAppLink: StoryObj<typeof SpaLink> = {
  render: (args) => <SpaLink {...args} />,

  args: {
    children: "Use SpaLink for single page apps like Next.js",
    href: "/#example",
    RightIcon: ArrowRight,
  },
};
