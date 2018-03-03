import React from "react"
import { Button, Text, View } from "react-native"
import styles from "../../styles"

export default class MainHomeScreen extends React.Component {
  gotoAlt = () => this.props.navigation.navigate("MainAlt")
  gotoModal = () => this.props.navigation.navigate("ModalView")
  render() {
    const { userInfo } = this.props.screenProps
    return (
      <View style={styles.screen}>
        <Text style={styles.h1}>Main Tab</Text>
        <Text style={styles.text}>The Main Home Screen</Text>
        <Text>Welcome user {userInfo.name}</Text>
        <Text>to Account {userInfo.account.company_name}</Text>
        <Button title="goto second screen" onPress={this.gotoAlt} />
        <Button title={"go to modal view"} onPress={this.gotoModal} />
      </View>
    )
  }
}
