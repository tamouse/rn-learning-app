import { StackNavigator } from 'react-navigation'
import MainHomeScreen from './home_screen'
import MainAltScreen from './alt_screen'

export default MainStack = StackNavigator(
  {
    MainHome: { screen: MainHomeScreen },
    MainAlt: { screen: MainAltScreen }
  }
)

