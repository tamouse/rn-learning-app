/**
 * Attempt to make default side headers for the StackNavigator header
 *
 * This always overrides the sides :(
 */

import React from "react"
import { Text, StyleSheet } from "react-native"

export const DefaultLeftHeader = props => {
  return (
    <Text style={s.blank}>-</Text>
  )
}

export const DefaultRightHeader = props => {
  return (
    <Text style={s.blank}>+</Text>
  )
}

const s = StyleSheet.create({
  blank: {
    backgroundColor: "white",
    color: "white"
  }
})