import type { TextProps } from '../Text';
import Text from '../Text'

export type EmProps = Omit<TextProps, 'as' | 'display' | 'italic' | 'align'>

const Em = ({css, children, vibe, weight, size, decoration}: EmProps) => {
  return (
    <Text
      as="em"
      css={css}
      display="inline"
      weight={weight}
      vibe={vibe}
      size={size}
      decoration={decoration}
      italic
    >
      {children}
    </Text>
  )
}

export default Em
