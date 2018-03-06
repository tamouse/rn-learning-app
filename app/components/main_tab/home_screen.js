import React from "react"
import { Button, Text, View } from "react-native"
import styles from "../../styles"
import { getCredentials } from "../../authentication/actions"
import { HamburgerMenu } from "../stack_header/hamburger_menu"

export default class MainHomeScreen extends React.Component {

  static navigationOptions = {
    headerLeft: HamburgerMenu
  }

  state = {
    account_slug: "Unknown!"
  }

  componentWillMount() {
    getCredentials().then(creds =>
      this.setState({ account_slug: creds.credentials.account_slug })
    )
  }

  componentDidUpdate(prevProps, prevState) {
    getCredentials().then(creds => {
      if (prevState.account_slug !== creds.credentials.account_slug) {
        this.setState({ account_slug: creds.credentials.account_slug })
      }
    })
  }

  gotoAlt = () => this.props.navigation.navigate("MainAlt")
  gotoModal = () => this.props.navigation.navigate("ModalView")
  gotoGeneric = () => this.props.navigation.navigate("Generic")

  render() {
    return (
      <View style={styles.screen}>
        <Text style={styles.h1}>Main Tab</Text>
        <Text style={styles.text}>The Main Home Screen</Text>
        <Text>to Account {this.state.account_slug}</Text>
        <Button title="goto second screen" onPress={this.gotoAlt} />
        <Button title={"go to modal view"} onPress={this.gotoModal} />
        <Button title={"Visit Generic"} onPress={this.gotoGeneric} />
      </View>
    )
  }
}
