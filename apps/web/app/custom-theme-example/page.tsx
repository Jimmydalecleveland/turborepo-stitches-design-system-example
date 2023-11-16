"use client";
import {
  Box,
  Button,
  Card,
  Check,
  Heading,
  Inline,
  Rocket,
  Stack,
  Tag,
  Text,
  XMark,
} from "@jimmydalecleveland/stitches-ui-example";
import customSiteTheme, {
  goldenrodGlobalStyles,
} from "../../theme/goldenrod/stitches.config";
import { UINextLink } from "../../components/Link";

goldenrodGlobalStyles();

export default function CustomThemeExamplePage(): React.ReactElement {
  return (
    <div className={customSiteTheme}>
      <Box padding="08">
        <Stack space="03">
          <Heading size="h1">Custom Theme Example</Heading>
          <Heading size="h2">Goldenrod</Heading>
          <Text as="p">
            This is an example of a custom theme only being used at a page
            level. You could use it at the entire app level, to override the
            default theme, by applying the theme in the `layout.tsx` file.
          </Text>
          <Text as="p">
            I don&apos;t think this theme is very good for readability, but it
            is just an example. It also has custom fonts, which use `next/font`.
          </Text>
          <Card>
            <Inline alignX="between">
              <Inline space="03">
                <Button>Go Back</Button>
                <Button vibe="attract">Subscribe!</Button>
              </Inline>
              <UINextLink href="/">Home</UINextLink>
            </Inline>
          </Card>
          <Card>
            <Inline space="04">
              <Tag LeftIcon={XMark} vibe="critical">
                Deleted
              </Tag>
              <Tag LeftIcon={Rocket} vibe="warning">
                In Progress
              </Tag>
              <Tag LeftIcon={Check} vibe="positive">
                Complete!
              </Tag>
            </Inline>
          </Card>
        </Stack>
      </Box>
    </div>
  );
}
