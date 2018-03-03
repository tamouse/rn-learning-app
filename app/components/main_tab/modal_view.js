import React, { Component } from "react"
import { Text, View, Button, Modal, StyleSheet } from "react-native"

/*
 * I'm trying to learn how `react-native-modalbox` doesn't take up the whole screen.
 * I think I've figured out that they are *not* using the RN `Modal` and are instead
 * animating a `View` into place.
 */

export default class ModalView extends Component {
  state = {
    modalVisible: false,
    transparent: true
  }

  openModal = () => {
    this.setState({ modalVisible: true })
  }

  closeModal = () => {
    this.setState({ modalVisible: false })
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal visible={this.state.modalVisible} transparent={true} onRequestClose={()=>{}} animationType={'fade'} >
          <View style={styles.modalContainer}>
            <View style={styles.innerContainer}>
              <Text>This is not really a modal</Text>
              <Button onPress={this.closeModal} title="Close modal" />
            </View>
          </View>
        </Modal>

        <Button onPress={this.openModal} title="Open modal" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
    height: "100%",
    width: "100%"
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  innerContainer: {
    backgroundColor: 'white',
    borderRadius: 4,
    width: 250,
    padding: 20,
    top: 0,
    justifyContent: 'center'
  }
})
