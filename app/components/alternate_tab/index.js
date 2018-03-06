import { StackNavigator } from "react-navigation"
import AltHomeScreen from "./home_screen"
import AltAltScreen from "./alt_screen"
import Generic from "../../components/generic_component"
import { StackHeaderTitle } from "../stack_header/stack_header_title"
import { EmptyMenu } from "../stack_header/empty_menu";

export default (AltStack = StackNavigator(
  {
    AltHome: { screen: AltHomeScreen },
    AltAlt: { screen: AltAltScreen },
    Generic: { screen: Generic }
  },
  {
    navigationOptions: {
      headerTitle: StackHeaderTitle,
      title: "Alt",
      headerRight: EmptyMenu
    }
  }
))
