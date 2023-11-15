import type { CSS } from "../theme/stitches.config";
import { createVariantMapping } from "../theme/utils";
import * as Styled from "./Columns.styles";

export interface ColumnProps {
  as?: "div" | "section" | "article" | "main" | "aside" | "header" | "footer";
  css?: CSS;
  children: React.ReactNode;
  width?: ColumnWidth | ColumnWidthBreakpoints;
}

export type ColumnWidth =
  | "content"
  | "fluid"
  | "1/2"
  | "1/3"
  | "2/3"
  | "1/4"
  | "3/4"
  | "1/5"
  | "2/5"
  | "3/5"
  | "4/5";

export interface ColumnWidthBreakpoints {
  "@initial"?: ColumnWidth;
  "@bp1"?: ColumnWidth;
  "@bp2"?: ColumnWidth;
  "@bp3"?: ColumnWidth;
}

export type WidthVariant =
  | "content"
  | "fluid"
  | "half"
  | "third"
  | "twoThirds"
  | "oneFourth"
  | "threeFourths"
  | "oneFifth"
  | "twoFifths"
  | "threeFifths"
  | "fourFifths";

export interface WidthVariantBreakpoints {
  "@initial"?: WidthVariant;
  "@bp1"?: WidthVariant;
  "@bp2"?: WidthVariant;
  "@bp3"?: WidthVariant;
}

const widthMap: Record<ColumnWidth, WidthVariant> = {
  content: "content",
  fluid: "fluid",
  "1/2": "half",
  "1/3": "third",
  "2/3": "twoThirds",
  "1/4": "oneFourth",
  "3/4": "threeFourths",
  "1/5": "oneFifth",
  "2/5": "twoFifths",
  "3/5": "threeFifths",
  "4/5": "fourFifths",
};

const Column = ({ as, css, children, width = "fluid" }: ColumnProps) => {
  const widthVariant = createVariantMapping(width, widthMap);

  return (
    <Styled.Column as={as} css={css} width={widthVariant}>
      {children}
    </Styled.Column>
  );
};

export default Column;
