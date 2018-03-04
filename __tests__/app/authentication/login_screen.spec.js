import { shallow, mount } from "enzyme"
import React from "react"
import LoginScreen from "../../../app/authentication/login_screen"

describe('LoginScreen', function () {
  it('renders the LoginScreen', function () {
    const submitLogin = jest.fn()
    const actual = shallow(<LoginScreen loading={false} submitLogin={submitLogin} errorMsg={''}/>)
    expect(actual).toMatchSnapshot()
  });
});