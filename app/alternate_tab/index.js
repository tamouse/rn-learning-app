import { StackNavigator } from "react-navigation";
import AltHomeScreen from "./home_screen";
import AltAltScreen from "./alt_screen";

export default (AltStack = StackNavigator(
  {
    AltHome: { screen: AltHomeScreen },
    AltAlt: { screen: AltAltScreen }
  },
  {
    navigationOptions: {
      title: "Alt"
    }
  }
));
