import React from 'react'
import LoginScreen from "./login_screen"

export class LoginContainer extends React.Component {

  state = {
    loading: false,
    loggedIn: false
  }

  closeModal = () => {
    setTimeout(() => {
      this.setState({ loading: false })
    }, 5000)
  }

  submitLogin = params => {
    this.setState({ loading: true }, this.closeModal)
  }

  render() {
    return (
      <LoginScreen loading={this.state.loading} submitLogin={this.submitLogin}/>
    )
  }
}

export default LoginContainer
