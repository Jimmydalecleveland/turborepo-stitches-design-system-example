import { render } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import { screen } from "@storybook/testing-library";
import * as stories from "./Inline.stories";

const { MinimalExample } = composeStories(stories);

test("Columns and Column render", () => {
  render(<MinimalExample />);

  screen.getByText(/one/i);
  screen.getByText(/two/i);
  screen.getByText(/three/i);
});
