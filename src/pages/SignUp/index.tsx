import React, { useRef, useCallback } from 'react'
import {
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert
} from 'react-native'
import { Container, Title } from './styles'
import { Form } from '@unform/mobile'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'
import getValidationErrors from '../../utils/getValidationErrors'

interface CityFormData {
  city: string
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const handleSignUp = useCallback(async (data: CityFormData) => {
    try {
      formRef.current?.setErrors({})
      const schema = Yup.object().shape({
        city: Yup.string().required('Cidade é obrigatória')
      })

      await schema.validate(data, {
        abortEarly: false
      })
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err)

        formRef.current?.setErrors(errors)

        return
      }

      Alert.alert('Erro', 'Ocorreu um erro')
    }
  }, [])

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <View>
              <Title>Escolha a cidade e estado onde você mora</Title>
            </View>
            <Form ref={formRef} onSubmit={handleSignUp}>
              <Input
                autoCorrect={true}
                autoCapitalize="words"
                keyboardType="ascii-capable"
                icon="map-pin"
                name="city"
                placeholder="Digite sua cidade"
                returnKeyLabel="send"
                onSubmitEditing={() => formRef.current?.submitForm()}
              />

              <Button onPress={() => formRef.current?.submitForm()}>
                Continuar
              </Button>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  )
}

export default SignUp
