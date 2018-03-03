import { StackNavigator } from "react-navigation";
import MainHomeScreen from "./home_screen";
import MainAltScreen from "./alt_screen";
import ModalView from "./modal_view";
import React from "react";

export default (MainStack = StackNavigator(
  {
    MainHome: { screen: MainHomeScreen },
    MainAlt: { screen: MainAltScreen },
    ModalView: { screen: ModalView }
  },
  {
    navigationOptions: {}
  }
));
