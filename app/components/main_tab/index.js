import { StackNavigator } from "react-navigation"
import MainHomeScreen from "./home_screen"
import MainAltScreen from "./alt_screen"
import ModalView from "./modal_view"
import Generic from "../../components/generic_component"
import MainStackHeader from "./main_stack_header"

// import { DefaultLeftHeader, DefaultRightHeader } from "./defaultSides"

export default (MainStack = StackNavigator(
  {
    MainHome: { screen: MainHomeScreen },
    MainAlt: { screen: MainAltScreen },
    ModalView: { screen: ModalView },
    Generic: { screen: Generic }
  },
  {
    navigationOptions: {
      // NOTE: Trying to override the default stack header didn't work the way I wanted.
      // header: MainStackHeader,
      title: "Main",
      // NOTE: The following doesn't work: these fill in all the screens of the stack :(
      // headerLeft: DefaultLeftHeader,
      // headerRight: DefaultRightHeader
    }
  }
))
