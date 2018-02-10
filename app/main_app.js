import PropTypes from 'prop-types'
import React from 'react'
import { Button, Text, View } from 'react-native'
import styles from './styles'

export default class MainApp extends React.Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired // from RootNavigator
  }

  gotoAltScreen = () => this.props.navigation.navigate('Alt')

  render() {
    return (
      <View style={styles.screen}>
        <Text style={styles.defaultText}>
          This is the main app.
        </Text>
        <Text>
          It is called {this.props.appName}!
        </Text>
        <Button
          title={`Go to Alternate Screen`}
          onPress={this.gotoAltScreen} />
      </View>
    )
  }
}
