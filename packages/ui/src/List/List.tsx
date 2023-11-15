import * as React from "react";
import { Stack } from "../Stack";
import type { CSS, ThemeSpace } from "../theme/stitches.config";
import * as Styled from "./List.styles";

export interface ListProps {
  css?: CSS;
  children: React.ReactNode;
  space?: ThemeSpace;
  gap?: ThemeSpace;
  Icon?: React.ReactNode;
}

const List = ({ children, css, Icon, space, gap = "03" }: ListProps) => {
  return (
    <Stack as="ul" space={space} css={{ listStyle: "none", ...css }}>
      {React.Children.map(children, (child) => (
        <Styled.Item gap={gap}>
          {Icon || <Styled.Bullet />}
          {child}
        </Styled.Item>
      ))}
    </Stack>
  );
};

export default List;
