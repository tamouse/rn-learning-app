import React from "react"
import { shallow } from "enzyme"
import { MainApp} from "../../app/main"

describe("Testing MainApp", ()=>{
  it("renders the MainApp", ()=>{
    expect(shallow(<MainApp />)).toBeTruthy()
  })
  it('matches the snapshot', function () {
    expect(shallow(<MainApp/>)).toMatchSnapshot()
  });
})