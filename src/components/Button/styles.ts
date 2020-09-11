import styled, { css } from 'styled-components/native'
import {
  TouchableOpacity,
  BaseButtonProperties
} from 'react-native-gesture-handler'
import colors from '../../styles/colors'
import { TextProps } from 'react-native'

interface ContainerProps extends BaseButtonProperties {
  outline?: boolean
}

interface ButtonTextProps extends TextProps {
  outline?: boolean
  enabled?: boolean
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  width: 100%;
  height: 60px;
  background: ${colors.primary};
  border-radius: 10px;
  margin-top: 16px 0px;

  justify-content: center;
  align-items: center;
  ${props =>
    props.outline &&
    css`
      border: 2px solid ${colors.primary};
      background: ${colors.light};
    `}
`

export const ButtonText = styled.Text<ButtonTextProps>`
  font-family: 'Rubik_400Regular';
  color: ${props =>
    !props.enabled
      ? colors.medium
      : props.outline
      ? colors.primary
      : colors.light};
  font-size: 18px;
`
