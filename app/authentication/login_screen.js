import React from "react"
import T from "prop-types"
import { View, Text, TextInput, Modal, StyleSheet } from "react-native"
import Button from "../components/button"

export default class LoginScreen extends React.Component {
  static propTypes = {
    loading: T.bool,
    submitLogin: T.func,
    errorMsg: T.string
  }

  static defaultProps = {
    loading: false,
    submitLogin: () => {},
    errorMsg: ""
  }

  clearState = {
    account_slug: "",
    username: "",
    password: "",
    disableSubmit: true
  }

  state = Object.assign({}, this.clearState)

  componentDidUpdate(prevProps) {
    if (prevProps.loading && !this.props.loading) {
      this.setState(this.clearState)
    }
  }

  handleSubdomainChange = account_slug => {
    this.setState({ account_slug }, this.checkSubmitReady)
  }

  handleUsernameChange = username => {
    this.setState({ username }, this.checkSubmitReady)
  }

  handlePasswordChange = password => {
    this.setState({ password }, this.checkSubmitReady)
  }

  checkSubmitReady = () => {
    if (this.state.account_slug && this.state.username && this.state.password) {
      this.setState({ disableSubmit: false })
    }
  }

  handleSubmit = () => {
    const params = {
      account_slug: this.state.account_slug,
      username: this.state.username,
      password: this.state.password
    }
    this.props.submitLogin(params)
  }

  renderIfErrors = () => {
    if (this.props.errorMsg) {
      return (
        <View style={styles.errorBox}>
          <Text style={styles.errorText}>{this.props.errorMsg}</Text>
        </View>
      )
    }
  }

  render() {
    let inputBoxProps = {
      style: styles.inputBox,
      autoCorrect: false,
      autoCapitalize: `none`
    }

    return (
      <View style={styles.mainScreen}>
        <View style={styles.container}>
          <TextInput
            {...inputBoxProps}
            placeholder="account slug"
            value={this.state.account_slug}
            onChangeText={this.handleSubdomainChange}
          />
          <TextInput
            {...inputBoxProps}
            placeholder="user name"
            value={this.state.username}
            onChangeText={this.handleUsernameChange}
          />
          <TextInput
            {...inputBoxProps}
            placeholder="password"
            value={this.state.password}
            onChangeText={this.handlePasswordChange}
          />
          <Button
            buttonType="primary"
            onPress={this.handleSubmit}
            accessibilityLabel="Login Button"
            disabled={this.state.disableSubmit}
          >
            Log In
          </Button>
          {this.renderIfErrors()}
          <Modal visible={this.props.loading}>
            <View style={styles.container}>
              <Text style={styles.loading}>I'm Loading, yo</Text>
            </View>
          </Modal>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputBox: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: `#9e9e9e`,
    padding: 5,
    width: 250,
    margin: 5
  },
  container: {
    flex: 1,
    flexDirection: `column`,
    justifyContent: `center`,
    alignItems: `center`,
    backgroundColor: "white",
    width: "100%"
  },
  loading: {
    backgroundColor: "rebeccapurple",
    color: "white",
    padding: 20,
    fontWeight: "900",
    fontSize: 20
  },
  mainScreen: {
    flex: 1,
    alignItems: `center`,
    justifyContent: `space-between`,
    backgroundColor: "red"
  },
  errorBox: {
    padding: 5
  },
  errorText: {
    backgroundColor: "#ffe4e1",
    borderColor: "red",
    borderWidth: 1,
    padding: 20,
    color: "red"
  }
})
