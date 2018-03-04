import React from "react"
import rendereer from "react-test-renderer"
import { RootNavigator} from "../../app/routes"

describe('Testing RootNavigator', function () {
  it('renders the RootNavigator', function () {
    expect(rendereer.create(
      <RootNavigator/>
    )).toMatchSnapshot()
  });
});