import React from "react"
import { Text, View, StyleSheet } from "react-native"

/**
 * Replace the Main StackNavigator Header with my own component.
 *
 * Given the the `header` option:
 *
 * > React Element or a function that given HeaderProps returns a React Element, to display as a header. Setting to null hides header.
 *
 * I think this means it needs to be a function?
 *
 * This attempt didn't work, either :(
 */

export const MainStackHeader = props => {
  return (
    <View style={styles.outer}>
      <View style={styles.inner}>
        <Text style={styles.title}>{props.children}</Text>
      </View>
    </View>
  )
}

export default MainStackHeader

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  inner: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "black",
    fontSize: 20,
    fontWeight: "900"
  }
})
