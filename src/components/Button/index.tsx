import React from 'react'

import { BaseButtonProperties } from 'react-native-gesture-handler'
import { Container, ButtonText } from './styles'

interface ButtonProps extends BaseButtonProperties {
  children: string
  outline?: boolean
}

const Button: React.FC<ButtonProps> = ({ children, outline, ...rest }) => (
  <Container outline={outline} {...rest}>
    <ButtonText outline={outline} enabled={rest.enabled}>
      {children}
    </ButtonText>
  </Container>
)

export default Button
