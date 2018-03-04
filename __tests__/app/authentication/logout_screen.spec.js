import React from "react"
import renderer from "react-test-renderer"

import LogoutScreen from "../../../app/authentication/logout_screen";

describe('LogoutScreen', function () {

  it('renders the LogoutScreen', function () {
    const navigation = {}
    const screenProps = {
      loggedOut: jest.fn()
    }
    const wrapper = renderer.create(
      <LogoutScreen navigation={navigation} screenProps={screenProps}/>
    )
    expect(wrapper).toMatchSnapshot()
  });
});