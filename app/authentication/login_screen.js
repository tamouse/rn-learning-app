import React from "react"
import { View, TextInput, StyleSheet } from "react-native"
import Button from "../components/button"

export default class LoginScreen extends React.Component {
  state = {
    account_slug: "",
    username: "",
    password: ""
  }

  handleSubdomainChange = account_slug => {
    this.setState({ account_slug })
  }

  handleUsernameChange = username => {
    this.setState({ username })
  }

  handlePasswordChange = password => {
    this.setState({ password })
  }

  submitLogin = () => {
    console.log("login")
    console.log(this.state)
    this.setState({
      account_slug: "",
      username: "",
      password: ""
    })
  }

  render() {
    let inputBoxProps = {
      style: styles.inputBox,
      autoCorrect: false,
      autoCapitalize: `none`
    }
    return (
      <View
        style={{
          alignItems: `center`,
          justifyContent: `space-between`
        }}
      >
        <View
          styke={{
            flexDirection: `column`,
            justifyContent: `space-between`,
            alignItems: `center`
          }}
        >
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
        </View>
        <Button
          buttonType="primary"
          onPress={this.submitLogin}
          accessibilityLabel="Login Button"
          disabled={
            this.state.account_slug === "" ||
            this.state.username === "" ||
            this.state.password === ""
          }
        >
          Log In
        </Button>
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
  }
})
