import { shallow } from "enzyme"
import React from "react"
import LogoutScreen from "../../../app/authentication/logout_screen";

describe('LogoutScreen', function () {

  const navigation = {}
  const loggedOut = jest.fn()

  beforeEach(() => {
    global.wrapper = shallow(<LogoutScreen navigation={navigation} screenProps={ {loggedOut: loggedOut} }/>)
  })

  it('renders the LogoutScreen', function () {
    expect(wrapper).toMatchSnapshot()
  });
});