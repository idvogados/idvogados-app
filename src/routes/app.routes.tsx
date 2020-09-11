import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Ticket from '../pages/Ticket'
import Profile from '../pages/Profile'
import Dashboard from '../pages/Dashboard'
import CreateTicket from '../pages/CreateTicket'
import colors from '../styles/colors'

const App = createStackNavigator()

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      // headerShown: false,
      cardStyle: { backgroundColor: colors.light }
    }}
  >
    <App.Screen name="Dashboard" component={Dashboard} />
    <App.Screen name="CreateTicket" component={CreateTicket} />
    <App.Screen name="Ticket" component={Ticket} />
    <App.Screen name="Profile" component={Profile} />
  </App.Navigator>
)

export default AppRoutes
