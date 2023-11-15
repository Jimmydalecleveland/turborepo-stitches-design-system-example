import {
  ArrowRight,
  BlockQuote,
  Box,
  Button,
  Card,
  Check,
  Column,
  Columns,
  Heading,
  Inline,
  Link,
  List,
  Rocket,
  Stack,
  Tag,
  Text,
} from "@jimmydalecleveland/stitches-ui-example";
import { UINextLink } from "../components/Link";

export default function Page(): React.ReactElement {
  return (
    <main>
      <Box padding="04">
        <Stack space="06">
          <Box vibe="neutral">
            <Heading size="h1">Welcome to the Stitches Design System</Heading>
            <Text as="p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus amet cum deserunt distinctio enim eos est excepturi
              expedita harum id illum laudantium magni modi natus neque, nihil,
              nisi numquam odit officia optio perspiciatis quia quo ratione
              rerum saepe veritatis vero! Eum, illum quam. Dolores esse eum
              itaque repellat, vero voluptatum.
            </Text>
          </Box>
          <Card>
            <Inline space="05">
              <Tag LeftIcon={Check} vibe="positive">
                Complete!
              </Tag>
              <Button vibe="neutral">Sign out</Button>
              <Button RightIcon={Rocket} vibe="attract">
                Sign up!
              </Button>
              <UINextLink href="/">SPA Link</UINextLink>
            </Inline>
          </Card>

          <Stack space="05">
            <Heading size="h2">Heading 2</Heading>
            <Text as="p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus ad asperiores culpa dolore eaque laudantium maxime
              molestias nobis rem, vero.
            </Text>
          </Stack>

          <Columns space="04">
            <Column>
              <Stack space="03">
                <Heading as="h3">Heading 3</Heading>
                <Text as="p">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusamus ad asperiores culpa dolore eaque laudantium maxime
                  molestias nobis rem, vero.
                </Text>
                <List>
                  <Text>List item 1</Text>
                  <Text>List item 2</Text>
                  <Text>List item 3</Text>
                </List>
              </Stack>
            </Column>
            <Column>
              <Stack space="03">
                <Heading as="h3">Heading 3</Heading>
                <Text as="p">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusamus ad asperiores culpa dolore eaque laudantium maxime
                  molestias nobis rem, vero.
                </Text>
                <List Icon={<Check vibe="positive" />} gap="03">
                  <Text>Do the thing.</Text>
                  <Text>Do that other thing.</Text>
                  <Text>A third item cuz it is weird with only two.</Text>
                </List>
              </Stack>
            </Column>
          </Columns>
          <BlockQuote>
            But that was civilisation, so far as Logen could tell. People with
            nothing better to do, dreaming up ways to make easy things
            difficult.
          </BlockQuote>
          <Stack space="01">
            <Text weight="bold">
              Common example of a `Link` inlined with a `Button`
            </Text>
            <Inline alignX="between">
              <Button LeftIcon={Rocket} size="small" variant="hollow">
                Need Help?
              </Button>
              <Link RightIcon={ArrowRight} href="/" target="_blank">
                See full details
              </Link>
            </Inline>
          </Stack>
        </Stack>
      </Box>
    </main>
  );
}
