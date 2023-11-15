/* eslint-disable tsdoc/syntax -- tsdoc conflicts with jsdoc example code in comments */
import { Inline } from "../../Inline";
import * as Styled from "./compounds.styles";

export interface CardHeaderProps {
  text: string;
  prominent?: boolean;
  alwaysCentered?: boolean;
}

/**
 * This is really stupid, but Stitches has a bug with dynamically chosen
 * breakpoint properties. The following will not work correctly:
 * <Inline
 *  alignX={{
 *    '@initial': 'center',
 *    '@bp2': alwaysCentered ? 'center' : 'left',
 *  }}
 * >
 * // ...
 *
 * It has something to do with not being able to statically generate styles,
 * since they become runtime concerns. To work around this I've created two
 * different components, one that always centers and one that doesn't.
 *
 * This might seem the same, but it allows for generating the styles of both,
 * statically, and then choosing which to use. At least, that is how I think
 * it works.
 */
const AlwaysCenteredInline = ({ children }: { children: React.ReactNode }) => {
  return (
    <Inline
      alignX={{
        "@initial": "center",
      }}
    >
      {children}
    </Inline>
  );
};

const DefaultInline = ({ children }: { children: React.ReactNode }) => {
  return (
    <Inline
      alignX={{
        "@initial": "center",
        "@bp2": "left",
      }}
    >
      {children}
    </Inline>
  );
};

/**
 * A common layout for awards, such as "Top Pick" or "Editor's Choice".
 * It includes a laurel on the left and right side of the text, styled
 * to match the `prominent` value.
 */
const CardHeader = ({
  text,
  prominent = false,
  alwaysCentered = false,
}: CardHeaderProps) => {
  const DerivedInline = alwaysCentered ? AlwaysCenteredInline : DefaultInline;
  return (
    <DerivedInline>
      <Styled.CardHeading vibe={prominent ? "neutralInverse" : "neutral"}>
        {text}
      </Styled.CardHeading>
    </DerivedInline>
  );
};

export default CardHeader;
