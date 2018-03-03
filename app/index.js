import React from "react"
import { Login } from "./authentication"
import { MainApp } from "./main"

export class App extends React.Component {

  state = {
    isLoggedIn: false,
    userInfo: {}
  }

  loggedIn = userInfo => {
    if (userInfo && userInfo.api_token) {
      this.setState({
        isLoggedIn: true,
        userInfo
      })
    }
  }
  render() {
    const props = this.props
    if (this.state.isLoggedIn) {
      return <MainApp {...props} userInfo={this.state.userInfo} />
    } else {
      return <Login {...props} loggedOn={this.loggedIn} />
    }
  }
}

export default App
