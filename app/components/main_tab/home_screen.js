import React from "react"
// import T from "prop-types"
import { Button, Text, View } from "react-native"
import styles from "../../styles"
import { getCredentials } from "../../authentication/actions"
import { DefaultRightHeader, DefaultLeftHeader } from "./defaultSides"

export default class MainHomeScreen extends React.Component {
  // static propTypes = {}

  // This means of getting the title to be centered isn't really tenable.
  // I have to put something like this in *every* component of the stack,
  // omitting the left side for screens on the stack beyond the first.
  // static navigationOptions = {
  //   headerLeft: <Text>*</Text>,
  //   headerRight: <Text>*</Text>
  // }
  static navigationOptions = {
    headerLeft: DefaultLeftHeader,
    headerRight: DefaultRightHeader
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
