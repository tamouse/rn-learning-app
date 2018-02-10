/*
 * This is where we specify different stacks for navigation, aka "routes" for the applicaiton.
 */

import {StackNavigator} from 'react-navigation'
import MainApp from './main_app'
import {Login} from './authentication/'
import AltScreen from "./alternate_screen"

export default RootNavigator = StackNavigator(
  {
    Home: {
      screen: MainApp
    },
    Alt: {
      screen: AltScreen
    },
    Login: {
      screen: Login
    }
  },
  {
    initialRouteName: 'Home'
  }
)
