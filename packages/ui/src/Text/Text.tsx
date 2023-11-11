import type { CSS, ThemeFontWeights, ThemeVibes } from '../theme/stitches.config'
import * as Styled from './Text.styles'

export type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface TextProps {
  as?: 'span' | 'p' | 'strong' | 'em' | 'b' | 'i'
  css?: CSS
  children: React.ReactNode
  display?: 'block' | 'inline'
  size?: TextSize
  weight?: ThemeFontWeights
  align?: 'left' | 'center' | 'right'
  decoration?: 'strikethrough' | 'underline'
  italic?: boolean
  vibe?: ThemeVibes
}

const Text = ({
  as,
  css,
  children,
  display = 'block',
  size = 'md',
  weight,
  align,
  decoration,
  italic,
  vibe = 'neutral',
}: TextProps) => {
  return (
    <Styled.Text
      as={as}
      css={css}
      display={display}
      size={size}
      weight={weight}
      align={align}
      decoration={decoration}
      italic={italic}
      vibe={vibe}
    >
      {children}
    </Styled.Text>
  )
}

export default Text
