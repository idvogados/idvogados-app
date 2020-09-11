import React, { useRef, useCallback } from 'react'
import { KeyboardAvoidingView, ScrollView, Platform, Alert } from 'react-native'
import { Header, Title, Description, Container } from './styles'
import { Form } from '@unform/mobile'
import * as Yup from 'yup'
import { FormHandles } from '@unform/core'
import getValidationErrors from '../../utils/getValidationErrors'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/native'

interface WaitingListFormData {
  email: string
}

const Unavailable: React.FC = () => {
  const navigation = useNavigation()
  const formRef = useRef<FormHandles>(null)

  const handleSignIn = useCallback(async (data: WaitingListFormData) => {
    try {
      formRef.current?.setErrors({})
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Digite email válido')
          .required('Email é obrigatório')
      })

      await schema.validate(data, {
        abortEarly: false
      })

      navigation.navigate('ShareApp')
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err)

        formRef.current?.setErrors(errors)

        return
      }

      Alert.alert('Erro na autenticação', 'Ocorreu um erro ao fazer login')
    }
  }, [])
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
            <Title>
              Infelizmente o Idvogados ainda não está disponivel em Santa Cruz
              da Vitória
            </Title>
            <Description>
              Registre seu email e receba seja notificado assim que a plataforma
              estiver disponível na sua região.
            </Description>
          </Header>
          <Form ref={formRef} onSubmit={handleSignIn}>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              icon="mail"
              name="email"
              placeholder="E-mail"
              returnKeyType="send"
              onSubmitEditing={() => formRef.current?.submitForm()}
              caption="Nunca compartilharemos essa informação e nunca enviaremos spam."
            />
          </Form>
          <Button onPress={() => formRef.current?.submitForm()}>
            Quero ser notificado
          </Button>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default Unavailable
