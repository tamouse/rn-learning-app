import React from "react"
import { Text, View } from "react-native"
import styles from "../../styles"

export default class MainAltScreen extends React.Component {
  /**
   * This method of trying to keep the title centered isn't really viable -- it requires putting something like this in
   * every component of the stack.
   */
  // static navigationOptions = {
  //   headerRight: <Text>*</Text>
  // }
  //
  render() {
    return (
      <View style={styles.screen}>
        <Text style={styles.h1}>Main Tab</Text>
        <Text style={styles.text}>The Main Second Screen</Text>
      </View>
    )
  }
}
