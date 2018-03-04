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

  it('calls the loggedOut passed function when the confirm button is pressed', function () {
    let button = wrapper.find( {id: `logout_button`} )
    expect(button.length).toEqual(1)
    button.simulate('click')
    expect(loggedOut.mock.calls.length).toBeGreaterThan(0)
  });
});