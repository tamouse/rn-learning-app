import { StackNavigator } from "react-navigation"
import MainHomeScreen from "./home_screen"
import MainAltScreen from "./alt_screen"
import ModalView from "./modal_view"
import Generic from "../../components/generic_component"
import MainStackHeader from "./main_stack_header"
// import Header from "./StackNavigatorHeader"
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
      // headerTitleStyle: {
      //   backgroundColor: 'red',
      //   // position: "absolute",
      //   // top: 0,
      //   // height: 300,
      //   // width: "100%"
      // },
      headerTitle: MainStackHeader,
      title: "main",
      // NOTE: The following doesn't work: these fill in all the screens of the stack :(
      // headerLeft: DefaultLeftHeader,
      // headerRight: DefaultRightHeader
      // NOTE: Copied the original Header from ReactNavigator, see if I can override; except it relies on a lot of other stuff :(
      // header: Header
      // headerStyle: {
      //   backgroundColor: 'red',
      //   // justifyContent: "center",  // NOTE: Can't use these
      //   // alignItems: "center"
      // }
    }
  }
))

