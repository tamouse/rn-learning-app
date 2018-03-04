import React from "react"
import renderer from "react-test-renderer"

import LoginScreen from "../../../app/authentication/login_screen"

describe('LoginScreen', function () {
  const submitLogin = jest.fn()
  it('renders the LoginScreen without error message', function () {
    expect(renderer.create(
      <LoginScreen loading={false} submitLogin={submitLogin} errorMsg={''}/>
    )).toMatchSnapshot()
  });
  it('renders the LoginScreen with an error message', function () {
    expect(renderer.create(
      <LoginScreen loading={false} submitLogin={submitLogin} errorMsg={'Error'}/>
    )).toMatchSnapshot()
  });
});