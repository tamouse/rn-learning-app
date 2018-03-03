import React from "react"
import T from "prop-types"
import {
  Text,
  View
} from "react-native"
import Button from "../components/button"
import styles from "../styles"

export class LogoutScreen extends React.Component {

  static propTypes = {
    loggedOut: T.func
  }

  static defaultProps = {
    loggedOut: ()=>{}
  }

  render() {
    return (
      <View style={styles.screen}>
        <Text style={styles.defaultText}>
          Are you sure you want to log out?
        </Text>
        <Button buttonType="primary" onPress={this.props.loggedOut} accessibilityLabel={"logout button"} disabled={false}>Confirm Log Out</Button>
      </View>
    )
  }
}

export default LogoutScreen