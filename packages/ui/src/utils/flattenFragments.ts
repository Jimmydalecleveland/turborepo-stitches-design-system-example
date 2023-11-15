/*
 * This is copied from the `react-keyed-flatten-children` package.
 * I had problems building this in a way that didn't upset Next.js,
 * and it had pretty outdated React deps. It's pretty small and
 * nice to see what's going on under the hood, anyway.
 *
 * Returns React children into an array, flattening fragments.
 */
import {
  Children,
  cloneElement,
  isValidElement,
  type ReactChild,
  type ReactNode,
} from "react";
// fyi: react-is was made by the React team at Facebook
import { isFragment } from "react-is";

const flattenFragments = (
  children: ReactNode,
  depth = 0,
  keys: (string | number)[] = [],
): ReactChild[] => {
  return Children.toArray(children).reduce(
    (acc: ReactChild[], node, nodeIndex) => {
      if (isFragment(node)) {
        acc.push(
          ...flattenFragments(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-member-access -- this is a React internal, and they unfortunately use `any` types
            node.props.children,
            depth + 1,
            keys.concat(node.key || nodeIndex),
          ),
        );
      } else if (isValidElement(node)) {
        acc.push(
          cloneElement(node, {
            key: keys.concat(String(node.key)).join("."),
          }),
        );
      } else if (typeof node === "string" || typeof node === "number") {
        acc.push(node);
      }
      return acc;
    },
    [],
  );
};

export default flattenFragments;
