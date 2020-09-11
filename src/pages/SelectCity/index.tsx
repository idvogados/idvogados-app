import React from 'react'
import { View } from 'react-native'
import { Container, Title, Description } from './styles'
import Button from '../../components/Button'
import cities, { City } from '../../utils/cities'
import { useNavigation } from '@react-navigation/native'

interface CityFormData {
  city: string
}

const SelectCity: React.FC = () => {
  const navigation = useNavigation()

  const comp = (a: string, b: string) =>
    a.toLowerCase().trim() === b.toLowerCase().trim()

  return (
    <Container>
      <View>
        <Title>Vamos começar</Title>
        <Description>Qual cidade você mora?</Description>
      </View>
      {/* <Input name="city" /> */}
      {/* <Form ref={formRef} onSubmit={handleSignUp}>
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
      </Form> */}
      <Button onPress={() => navigation.navigate('Unavailable')}>
        Continuar
      </Button>
    </Container>
  )
}

export default SelectCity
