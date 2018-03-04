import React from "react"
import T from "prop-types"
import { at } from "lodash" // because I am SICK of endless obj && obj.prop && obj.prop.subprop ...
import LoginScreen from "./login_screen"
import { login } from "./login_service"
import { setCredentials } from "./actions"

export class LoginContainer extends React.Component {
  static propTypes = {
    loggedOn: T.func.isRequired // callback when the login succeeds
  }

  state = {
    loading: false,
    errorMsg: ""
  }

  submitLogin = params => {
    this.setState({ loading: true, errorMsg: "" })
    login(params)
      .then(response => {
        if (response.status < 400) {
          return response.json()
        } else {
          throw response.status
        }
      })
      .then(user => {
        const account = at(user, ['account.subdomain'])
        const token = at(user, ['api_token'])
        if (account && token) {
          setCredentials(account, token)
            .then(() => {
              console.log(`DEBUG>>>>>> we think we saved the token`)
              this.setState({ loading: false }, this.props.loggedOn())
            })
            .catch(err => {
              this.setState({
                loading: false,
                errorMsg: `Unable to save login: ${err}`
              })
            })
        }
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
