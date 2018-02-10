import React from 'react'
import { Text, View } from 'react-native'
import styles from '../styles'

export default class AltAltScreen extends React.Component {
  render() {
    return (
      <View style={styles.screen}>
        <Text style={styles.h1}>Alternate Tab</Text>
        <Text style={styles.text}>Alternate Screen</Text>
      </View>
    )
  }
}