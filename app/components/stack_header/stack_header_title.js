import React from "react"
import { Text, View, StyleSheet } from "react-native"

export const StackHeaderTitle = props => {
  return (
    <View style={styles.outer}>
      <View style={styles.inner}>
        <Text style={styles.title}>{props.children}</Text>
      </View>
    </View>
  )
}

export default StackHeaderTitle

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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
