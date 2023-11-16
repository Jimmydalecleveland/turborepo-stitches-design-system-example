import type { Meta } from "@storybook/react";
import { Link } from "../Link";
import { Text } from "../Text";
import { Home } from "../Icon";
import { Breadcrumbs } from "./index";

export default {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  tags: ["autodocs"],
} as Meta<typeof Breadcrumbs>;

export const Default = {
  args: {
    children: (
      <>
        <Link href="/">
          <Home vibe="attract" size="xs" />
        </Link>
        <Link href="/#example" key={0} size="xs">
          Products
        </Link>
        <Link href="/#example" key={1} size="xs">
          Category
        </Link>
        <Text key={2} size="xs" weight="medium">
          Page Name
        </Text>
      </>
    ),
  },
};
