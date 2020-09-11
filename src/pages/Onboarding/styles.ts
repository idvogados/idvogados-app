import styled from 'styled-components/native'
import { Pages } from 'react-native-pages'
import colors from '../../styles/colors'

export const Container = styled.View`
  flex: 1;
  padding: 24px;
`
export const Slide = styled(Pages)`
  flex: 1;
`

export const Page = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Hero = styled.Image`
  height: 300;
`

export const Title = styled.Text`
  font-size: 24px;
  color: ${colors.dark};
  font-family: 'Poppins_700Bold';
  margin: 24px 0 24px;
`
export const Description = styled.Text`
  font-size: 18px;
  color: ${colors.dark};
  font-family: 'Rubik_400Regular';
  text-align: center;
`
