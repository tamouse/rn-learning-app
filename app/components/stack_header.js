import React from "react"
import { View, Text } from "react-native"
import styles from "../styles"

export default (StackHeader = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.defaultText}>{JSON.stringify(props)}</Text>
    </View>
  )
})
