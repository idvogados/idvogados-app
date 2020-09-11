import styled from 'styled-components/native'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import colors from '../../styles/colors'

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 0 30px 30px;
`

export const Title = styled.Text`
  font-size: 24px;
  color: ${colors.dark};
  font-family: 'Poppins_700Bold';
  margin: 64px 0 24px;
  text-align: center;
`

export const Description = styled.Text`
  font-size: 18px;
  color: ${colors.dark};
  font-family: 'Rubik_400Regular';
  text-align: center;
`
