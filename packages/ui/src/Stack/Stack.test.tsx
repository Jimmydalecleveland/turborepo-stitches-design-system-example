import { render } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import { screen } from "@storybook/testing-library";
import * as stories from "./Stack.stories";

const { Default } = composeStories(stories);

test("Stack renders", () => {
  render(<Default />);

  screen.getByText(/div 1/i);
  screen.getByText(/div 2/i);
  screen.getByText(/div 3/i);
});
