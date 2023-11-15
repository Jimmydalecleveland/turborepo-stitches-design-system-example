import {
  Box,
  Button,
  Column,
  Columns,
  Heading,
  Inline,
  Rocket,
  Stack,
  Text,
} from "@jimmydalecleveland/stitches-ui-example";

export default function Page(): React.ReactElement {
  return (
    <main>
      <Box vibe="neutral">
        <Heading size="h1">Welcome to the Stitches Design System</Heading>
        <Text as="p">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          amet cum deserunt distinctio enim eos est excepturi expedita harum id
          illum laudantium magni modi natus neque, nihil, nisi numquam odit
          officia optio perspiciatis quia quo ratione rerum saepe veritatis
          vero! Eum, illum quam. Dolores esse eum itaque repellat, vero
          voluptatum.
        </Text>
      </Box>
      <Inline space="05">
        <Button>Click Me!</Button>
        <Rocket backgroundVibe="attract" vibe="attract" />
      </Inline>

      <Stack space="08">
        <Stack space="05">
          <Heading size="h2">Heading 2</Heading>
          <Text as="p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            ad asperiores culpa dolore eaque laudantium maxime molestias nobis
            rem, vero.
          </Text>
        </Stack>

        <Columns space="04">
          <Column>
            <Heading as="h3">Heading 3</Heading>
            <Text as="p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus ad asperiores culpa dolore eaque laudantium maxime
              molestias nobis rem, vero.
            </Text>
          </Column>
          <Column>
            <Heading as="h3">Heading 3</Heading>
            <Text as="p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus ad asperiores culpa dolore eaque laudantium maxime
              molestias nobis rem, vero.
            </Text>
          </Column>
        </Columns>
      </Stack>
    </main>
  );
}
