import React from "react"
import T from "prop-types"
import LoginScreen from "./login_screen"
import { login } from "./login_service"

export class LoginContainer extends React.Component {
  static propTypes = {
    loggedOn: T.func,
  }

  static defaultProps = {
    loggedOn: ()=>{},
  }

  state = {
    loading: false,
    loggedIn: false,
    errorMsg: ""
  }

  closeModal = () => {
    setTimeout(() => {
      this.setState({ loading: false, errorMsg: "not logged in" })
    }, 5000)
  }

  submitLogin = params => {
    this.setState({ loading: true })
    login(params)
      .then(response => {
        if (response.status < 400) {
          return response.json()
        } else {
          throw response.status
        }
      })
      .then(user => {
        this.props.loggedOn(user)
        this.setState({ loading: false })
      })
      .catch(() => {
        this.setState({
          loading: false,
          errorMsg: "Could not log in with those credentials."
        })
      })
  }

  render() {
    return (
      <LoginScreen
        loading={this.state.loading}
        submitLogin={this.submitLogin}
        errorMsg={this.state.errorMsg}
      />
    )
  }
}

export default LoginContainer
