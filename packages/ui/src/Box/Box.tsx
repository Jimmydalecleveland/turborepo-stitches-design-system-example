import * as Styled from './Box.styles'

export type Align = 'flexStart' | 'flexEnd' | 'center' | 'baseline' | 'stretch'

export interface BoxProps extends Styled.BoxStyledProps {
  as?: React.ElementType
}

/**
 * In this design system `Box` is a Prime component that does much
 * of the heavy lifting and is used throughout this package by
 * other components.
 *
 * The philosophy behind this is that everything in the browser is
 * a box, and this is the base building block.
 *
 * For these reasons, it has many native css properties and is intended
 * to be used by other components much more than the actual users of
 * the design system. They should rarely need to reach for the Box component.
 *
 * NOTE: Box has a css reset, `baseBox`, that is used by all other components
 * to reset their styles, rather than globally resetting styles.
 */
const Box = ({
  as,
  css,
  children,
  display,
  corners,
  cornersTop,
  cornersBottom,
  vibe,
  shadow,
  flexDirection,
  alignItems,
  justifyContent,
  fullWidth,
  padding,
  paddingX,
  paddingY,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
}: BoxProps) => {
  return (
    <Styled.Box
      as={as}
      css={css}
      display={display}
      corners={corners}
      cornersTop={cornersTop}
      cornersBottom={cornersBottom}
      vibe={vibe}
      shadow={shadow}
      flexDirection={flexDirection}
      alignItems={alignItems}
      justifyContent={justifyContent}
      fullWidth={fullWidth}
      padding={padding}
      paddingX={paddingX}
      paddingY={paddingY}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
    >
      {children}
    </Styled.Box>
  )
}

export default Box
