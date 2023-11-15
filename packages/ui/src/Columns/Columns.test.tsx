import { render } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import { screen } from "@storybook/testing-library";
import * as stories from "./Columns.stories";
import { createEnabledBpObject } from "./Columns";

const { Minimal } = composeStories(stories);

test("Columns and Column render", () => {
  render(<Minimal />);

  screen.getByText(/one/i);
  screen.getByText(/two/i);
  screen.getByText(/three/i);
});

test("createEnabledBpObject should generate boolean breakpoint rules", () => {
  expect(createEnabledBpObject("bp1")).toEqual({
    "@initial": false,
    "@bp1": true,
  });
  expect(createEnabledBpObject("bp2")).toEqual({
    "@initial": false,
    "@bp2": true,
  });
  expect(createEnabledBpObject("bp3")).toEqual({
    "@initial": false,
    "@bp3": true,
  });
});
