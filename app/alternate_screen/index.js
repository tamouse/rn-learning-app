/* Alternate Screen, to demo StackNavigation */

import PropTypes from 'prop-types'
import React from 'react'
import { Button, Text, View } from 'react-native'
import styles from '../styles'

export default class AltScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired // the navigation object from RootNavigator
  }

  goBack = () => this.props.navigation.goBack()
  gotoHomeScreen = () => this.props.navigation.navigate('Home')

  render() {
    return (
      <View style={styles.screen}>
        <Text style={styles.text}>
          Alternate Screen
        </Text>
        <Button
          title={`Go to Home Screen`}
          onPress={this.gotoHomeScreen} />
        <Button
          title={`Return`}
          onPress={this.goBack}/>
      </View>
    )
  }
}
