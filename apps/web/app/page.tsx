import {
  Box,
  Button,
  Heading,
  Text,
  Rocket,
} from "@jimmydalecleveland/stitches-ui-example";

export default function Page(): React.ReactElement {
  return (
    <main>
      <Box vibe="neutral">
        <Heading>Welcome to the Stitches Design System</Heading>
        <Text as="p">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          amet cum deserunt distinctio enim eos est excepturi expedita harum id
          illum laudantium magni modi natus neque, nihil, nisi numquam odit
          officia optio perspiciatis quia quo ratione rerum saepe veritatis
          vero! Eum, illum quam. Dolores esse eum itaque repellat, vero
          voluptatum.
        </Text>
      </Box>
      <Button>Click Me!</Button>
      <Rocket vibe="attract" />
    </main>
  );
}
