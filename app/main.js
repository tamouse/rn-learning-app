import React from "react"
import RootNavigator from "./routes"

export class MainApp extends React.Component {
  render() {
    return <RootNavigator screenProps={this.props} />
  }
}

export default MainApp
