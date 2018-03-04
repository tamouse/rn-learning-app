import React from "react"
import { shallow } from "enzyme"
import { RootNavigator} from "../../app/routes"

describe('Testing RootNavigator', function () {
  it('renders the RootNavigator', function () {
    expect(shallow(<RootNavigator/>)).toBeTruthy()
  });
});