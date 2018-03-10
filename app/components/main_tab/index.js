import { StackNavigator } from "react-navigation"
import MainHomeScreen from "./home_screen"
import MainAltScreen from "./alt_screen"
import ModalView from "./modal_view"
import Generic from "../../components/generic_component"
import { StackHeaderTitle } from "../stack_header/stack_header_title"
import { EmptyMenu } from "../stack_header/empty_menu"

export default (MainStack = StackNavigator(
  {
    MainHome: { screen: MainHomeScreen },
    MainAlt: { screen: MainAltScreen },
    ModalView: { screen: ModalView },
    Generic: { screen: Generic }
  },
  {
    navigationOptions: {
      headerTitle: StackHeaderTitle,
      title: "main",
      headerRight: EmptyMenu
    }
  }
))
