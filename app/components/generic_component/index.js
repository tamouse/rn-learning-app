import React from "react"
import { View, Text } from "react-native"
import styles from "../../styles"

export class Generic extends React.Component {
  render() {
    return (
      <View style={styles.screen}>
        <Text style={styles.defaultText}>Just a Generic Component, yo</Text>
      </View>
    )
  }
}

export default Generic
