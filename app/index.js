import React from "react"
import { Login } from "./authentication"
import { MainApp } from "./main"
import { isLoggedIn, clearCredentials } from "./authentication/actions"

export class App extends React.Component {
  state = {
    isLoggedIn: false,
    didLogin: false
  }

  onLogin = () => {
    this.setState({ didLogin: true })
  }

  onLogout = () => {
    clearCredentials().then(() => {
      this.setState({ isLoggedIn: false })
    })
  }

  componentWillMount() {
    isLoggedIn().then(status => {
      this.setState({ isLoggedIn: status, didLogin: false })
    })
  }

  componentDidUpdate(_prevProps, prevState) {
    isLoggedIn().then(status => {
      if (status !== prevState.isLoggedIn) {
        console.log(
          `DEBUG>>>>>>> we noticed a change in the login status: ${
            prevState.isLoggedIn
          }`
        )
        this.setState({ isLoggedIn: status, didLogin: false })
      }
    })
  }

  render() {
    const props = this.props
    if (true) { // temporarily so i can just work on formatting
      return <MainApp {...props} loggedOut={this.onLogout} />
    } else {
      return <Login {...props} loggedOn={this.onLogin} />
    }
  }
}

export default App
