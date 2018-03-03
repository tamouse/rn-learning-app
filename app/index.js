import React from 'react'
import { isLoggedIn, userInfo, Login } from "./authentication"
import { MainApp } from './main'

export class App extends React.Component {

  render() {
    const props = this.props
    if (isLoggedIn()) {
      return (<MainApp {...props} userInfo={userInfo()} />)
    } else {
      return (<Login {...props}/>)
    }
  }
}

export default App
