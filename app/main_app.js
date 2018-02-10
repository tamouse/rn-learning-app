import PropTypes from 'prop-types'
import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'
import { StackNavigator } from 'react-navigation'

class MainApp extends React.Component {
  static propTypes = {
    appName: PropTypes.string
  }

  render() {
    console.log(this.props)
    return (
      <View style={styles.screen}>
        <Text style={styles.defaultText}>
          This is the main app.
        </Text>
        <Text>
          It is called {this.props.appName}!
        </Text>
      </View>
    )
  }
}

export default StackNavigator({
  MainApp: {
    screen: MainApp
  }
})