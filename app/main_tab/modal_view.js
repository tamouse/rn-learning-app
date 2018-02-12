import React, { Component } from 'react';
import { Text, View, Button, Modal, StyleSheet } from 'react-native';

/*
 * I'm trying to learn how `react-native-modalbox` doesn't take up the whole screen.
 * I think I've figured out that they are *not* using the RN `Modal` and are instead
 * animating a `View` into place.
 */

export default class ModalView extends Component {
  state = {
    modalVisible: false,
    transparent: true
  };

  openModal() {
    this.setState({modalVisible:true});
  }

  closeModal() {
    this.setState({modalVisible:false});
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal
          visible={this.state.modalVisible}
          animationType={'slide'}
          onRequestClose={() => this.closeModal()}
          transparent={this.state.transparent}
        >
          <View style={styles.modalContainer}>
            <View style={styles.innerContainer}>
              <Text>This is content inside of modal component</Text>
              <Text>The state is {this.state.transparent ? 'true' : 'false'}</Text>
              <Button
                onPress={() => this.closeModal()}
                title="Close modal"
              >
              </Button>
            </View>
          </View>
        </Modal>
        <Button
          onPress={() => this.openModal()}
          title="Open modal"
        />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    zIndex: 2,
    height: "80%",
    width: "100%",
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'grey',
    zIndex: 3,
    height: "80%",
    width: "100%",
  },
  innerContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    height: '80%',
    width: '100%',
    zIndex: 4,
  },
});