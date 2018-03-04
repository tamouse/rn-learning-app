import React from "react"
import T from "prop-types"
import { Text, View } from "react-native"
import Button from "../components/button"
import styles from "../styles"

export class LogoutScreen extends React.Component {
  static propTypes = {
    navigation: T.object.isRequired,
    screenProps: T.shape({
      loggedOut: T.func.isRequired // callback for when the user logs out
    })
  }

  render() {
    const screenProps = this.props.screenProps
    const { loggedOut } = screenProps
    return (
      <View style={styles.screen}>
        <Text style={styles.defaultText}>
          Are you sure you want to log out?
        </Text>
        <Button
          id={`logout_button`}
          buttonType="primary"
          onPress={loggedOut}
          accessibilityLabel={"logout button"}
          disabled={false}
        >
          Confirm Log Out
        </Button>
      </View>
    )
  }
}

export default LogoutScreen
