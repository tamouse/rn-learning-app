import React from "react"
import { Button, Text, View } from "react-native"
import styles from "../../styles"

export default class AltHomeScreen extends React.Component {
  gotoAltAlt = () => this.props.navigation.navigate("AltAlt")
  gotoGeneric = () => this.props.navigation.navigate("Generic")
  render() {
    return (
      <View style={styles.screen}>
        <Text style={styles.h1}>Alternate Tab</Text>
        <Text style={styles.text}>The Alternate Home Screen</Text>
        <Button title="next" onPress={this.gotoAltAlt} />
        <Button title={"Generic"} onPress={this.gotoGeneric}/>
      </View>
    )
  }
}
