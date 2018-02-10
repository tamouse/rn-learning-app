/*
 * This is where we specify different stacks for navigation, aka "routes" for the applicaiton.
 */

import { StackNavigator } from 'react-navigation'
import MainApp from 'main_app'
import { Login } from './authentication/'

export const RootNavigator = StackNavigator({
    Home: {
      screen: MainApp
    },
    Login: {
      screen: Login
    }
  },
  {
    initialRouteName: 'Home'
  })