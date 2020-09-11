import React from 'react'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Button from '../../components/Button'
import logoImg from '../../assets/logo.png'
import onboarding1Img from '../../assets/images/onboarding1.png'
import onboarding2Img from '../../assets/images/onboarding2.png'
import onboarding3Img from '../../assets/images/onboarding3.png'

import { Container, Title, Description, Page, Slide, Hero } from './styles'
import colors from '../../styles/colors'

const Onboarding: React.FC = () => {
  const navigation = useNavigation()

  return (
    <Container>
      <Slide indicatorColor={colors.primary}>
        <Page>
          <Image source={logoImg} />
          <Title>Bem vindo ao Idvogados!</Title>
          <Description>Arraste para conhecer nossos beneficios.</Description>
        </Page>
        <Page>
          <Hero source={onboarding1Img} style={{ resizeMode: 'contain' }} />
          <Title>Beneficio #1</Title>
          <Description>
            Aqui vai algum texto descrevendo um beneficio.
          </Description>
        </Page>
        <Page>
          <Hero source={onboarding2Img} style={{ resizeMode: 'contain' }} />
          <Title>Beneficio #2</Title>
          <Description>
            Aqui vai algum texto descrevendo um beneficio.
          </Description>
        </Page>
        <Page>
          <Hero source={onboarding3Img} style={{ resizeMode: 'contain' }} />
          <Title>Beneficio #3</Title>
          <Description>
            Aqui vai algum texto descrevendo um beneficio.
          </Description>
        </Page>
      </Slide>
      <Button
        onPress={() => {
          navigation.navigate('SelectCity')
        }}
      >
        Cadastrar
      </Button>
      <Button
        onPress={() => {
          navigation.navigate('SignIn')
        }}
        outline={true}
      >
        Entrar
      </Button>
    </Container>
  )
}

export default Onboarding
