import { StackNavigator } from "react-navigation"
import MainHomeScreen from "./home_screen"
import MainAltScreen from "./alt_screen"
import ModalView from "./modal_view"
import Generic from "../../components/generic_component"

export default (MainStack = StackNavigator(
  {
    MainHome: { screen: MainHomeScreen },
    MainAlt: { screen: MainAltScreen },
    ModalView: { screen: ModalView },
    Generic: { screen: Generic }
  },
  {
    navigationOptions: {
      title: "Main"
    }
  }
))
