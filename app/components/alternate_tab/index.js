import { StackNavigator } from "react-navigation"
import AltHomeScreen from "./home_screen"
import AltAltScreen from "./alt_screen"
import Generic from "../../components/generic_component"

export default (AltStack = StackNavigator(
  {
    AltHome: { screen: AltHomeScreen },
    AltAlt: { screen: AltAltScreen },
    Generic: { screen: Generic }
  },
  {
    navigationOptions: {
      title: "Alt"
    }
  }
))
