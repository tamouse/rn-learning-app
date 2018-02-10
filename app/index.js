import React from 'react';
import { isLoggedIn, Login } from './authentication/'
import MainApp from './main_app'

export default class App extends React.Component {
  render() {
    if (isLoggedIn()) {
      return (<MainApp appName={`RN Toy App`}/>)
    } else {
      return (<Login/>)
    }
  }
}

