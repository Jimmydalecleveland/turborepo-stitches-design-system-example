import { render } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import { screen } from "@storybook/testing-library";
import * as stories from "./List.stories";

const { Minimal } = composeStories(stories);

test("List renders", () => {
  render(<Minimal />);

  screen.getByText(/list item 1/i);
  screen.getByText(/list item 2/i);
  screen.getByText(/list item 3/i);
});
