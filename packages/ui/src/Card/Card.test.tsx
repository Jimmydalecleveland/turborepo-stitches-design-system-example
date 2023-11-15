import { render } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import { screen } from "@storybook/testing-library";
import * as stories from "./Card.stories";

const { Default, WithHeaderContent } = composeStories(stories);

test("Card renders", () => {
  render(<Default />);

  screen.getByText(/I am a Card/i);
});

test("Card renders with header content", () => {
  render(<WithHeaderContent />);

  screen.getByText(/editor's choice/i);
  screen.getByText(/I am a Card/i);
});
