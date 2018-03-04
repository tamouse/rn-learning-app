import React from "react"
import renderer from "react-test-renderer"

import { MainApp } from "../../app/main"

describe("Testing MainApp", ()=>{
  it('matches the snapshot', function () {
    expect(renderer.create(
      <MainApp/>
    )).toMatchSnapshot()
  });
})