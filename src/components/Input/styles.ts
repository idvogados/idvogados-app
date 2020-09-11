import styled, { css } from 'styled-components/native'
import FeatherIcon from 'react-native-vector-icons/Feather'
import colors from '../../styles/colors'

interface ContainerProps {
  isFocused: boolean
  isErrored: boolean
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: ${colors.light};
  border-radius: 10px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: ${colors.medium};

  flex-direction: row;
  align-items: center;

  ${props =>
    props.isErrored &&
    css`
      border-color: ${colors.danger};
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: ${colors.primary};
    `}
`

export const TextInput = styled.TextInput`
  flex: 1;
  color: ${colors.medium};
  font-size: 16px;
  font-family: 'Rubik_400Regular';
`

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`
export const Caption = styled.Text`
  color: ${colors.medium};
  font-size: 12px;
  font-family: 'Rubik_400Regular';
`
