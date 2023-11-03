import { styled } from "../theme/stitches.config";
import * as Styled from './Button.styles'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}
function Button({ children, ...rest }: ButtonProps) {
  return (
    <Styled.Button>
      {children}
    </Styled.Button>
  )
}

export default Button
