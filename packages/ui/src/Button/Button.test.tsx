import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as stories from "./Button.stories";

const { Default } = composeStories(stories);

test("Button renders", () => {
  render(<Default />);

  expect(screen.getByRole("button")).toHaveTextContent(/click me/i);
});
