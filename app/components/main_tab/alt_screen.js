import React from "react"
import { Text, View } from "react-native"
import styles from "../../styles"

export default class MainAltScreen extends React.Component {
  render() {
    return (
      <View style={styles.screen}>
        <Text style={styles.h1}>Main Tab</Text>
        <Text style={styles.text}>The Main Second Screen</Text>
      </View>
    )
  }
}
