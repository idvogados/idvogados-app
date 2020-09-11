import React from 'react'
import { KeyboardAvoidingView, ScrollView, Platform, Share } from 'react-native'
import { Header, Title, Description, Container } from './styles'
import Button from '../../components/Button'

const ShareApp: React.FC = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        title: 'Idvogados',
        url: 'https://idvogados.org',
        message:
          'Idvogados\n\nProjeto de acesso à justiça que conecta trabalhadores às instituições voluntárias dispostas a lutar por melhores condições de trabalho.\n\nhttps://idvogados.org'
      })
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <Container>
          <Header>
            <Title>Obrigado!</Title>
            <Title>Email registrado com sucesso</Title>
            <Description>
              Esperamos que em breve o app esteja disponivel em todos os
              estados, mas para isso precisamos de adesao de entregadores e
              advogados nesta plataforma.
            </Description>
            <Description>
              Por isso nos ajude compartilhando esse app para todos os seus
              amigos.
            </Description>
          </Header>

          <Button onPress={onShare}>Compartilhar</Button>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default ShareApp
