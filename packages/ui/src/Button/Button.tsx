import * as Styled from './Button.styles'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}
const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <Styled.Button {...rest}>
      {children}
    </Styled.Button>
  )
}

export default Button
