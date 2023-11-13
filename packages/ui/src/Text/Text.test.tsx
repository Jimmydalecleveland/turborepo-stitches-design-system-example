import { render } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import { screen } from "@storybook/testing-library";
import * as stories from "./Text.stories";

const { Default } = composeStories(stories);

test("Text renders", () => {
  render(<Default />);

  screen.getByText(/neutral text/i);
});
