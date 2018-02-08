import React from 'react'
import { View, TextInput, Button } from 'react-native'

export default class LoginScreen extends React.Component {
  static state = {
    account_slug: '',
    username: '',
    password: ''
  }

  handleSubdomainChange = account_slug => this.setState({ account_slug })
  handleUsernameChange = username => this.setState({username})
  handlePasswordChange = password => this.setState({password})

  render() {
    return (
        <View>
          <View>
            <TextInput
                placeholder='account slug'
                onChangeText={this.handleSubdomainChange}
            />
          </View>
          <View>
            <TextInput
                placeholder='user name'
                onChangeText={this.handleUsernameChange}
            />
          </View>
          <View>
            <TextInput
                placeholder='password'
                onChangeText={this.handlePasswordChange}
            />
          </View>

        </View>
    )
  }
}