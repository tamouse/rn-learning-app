/*
 * This is where we specify different stacks for navigation, aka "routes" for the applicaiton.
 */

import React from 'react'
import { Text } from 'react-native'
import { TabNavigator, TabBarBottom } from 'react-navigation'
import Main from './main_tab'
import Alt from "./alternate_tab"

// The RootNavigator will form the basis for Tab navigation
export default RootNavigator = TabNavigator(
  {
    Home: {
      screen: Main
    },
    Alt: {
      screen: Alt
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        return <Text style={{color: tintColor}}>{routeName}!</Text>
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      style: {
        zIndex: 999,
      }
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
)
