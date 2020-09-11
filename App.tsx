import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { useFonts, Rubik_400Regular } from '@expo-google-fonts/rubik'
import { Poppins_700Bold } from '@expo-google-fonts/poppins'
import { AppLoading } from 'expo'
import { NavigationContainer } from '@react-navigation/native'
import AppProvider from './src/hooks'
import Routes from './src/routes'

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Rubik_400Regular
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <NavigationContainer>
      <AppProvider>
        <Routes />
      </AppProvider>
      <StatusBar style="auto" />
    </NavigationContainer>
  )
}
