import { render } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import { screen } from "@storybook/testing-library";
import * as stories from "./Heading.stories";

const { Default } = composeStories(stories);

test("Heading renders", () => {
  render(<Default />);

  screen.getByText(/neutral text/i);
});

test("Heading renders with custom tag", () => {
  render(<Default as="h1" />);

  screen.getByText(/neutral text/i);
  expect(screen.getByText(/neutral text/i).tagName).toBe("H1");
});

test("Heading prioritizes tag when combined with size", () => {
  render(<Default as="h2" size="h4" />);

  screen.getByText(/neutral text/i);
  expect(screen.getByText(/neutral text/i).tagName).toBe("H2");
});
