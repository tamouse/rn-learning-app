import React from 'react'
import { Button, Text, View } from 'react-native'
import styles from '../styles'

export default class MainHomeScreen extends React.Component {
  gotoAlt = () => this.props.navigation.navigate('MainAlt')
  render() {
    return (
      <View style={styles.screen}>
        <Text style={styles.h1}>Main Tab</Text>
        <Text style={styles.text}>The Main Home Screen</Text>
        <Button title='goto Alt' onPress={this.gotoAlt}/>
      </View>
    )
  }
}
