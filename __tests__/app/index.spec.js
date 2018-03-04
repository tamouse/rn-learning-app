import React from 'react';
import renderer from "react-test-renderer"
import App from '../../app/index';


describe('Testing the global App', function () {
  beforeEach(function () {
    jest.mock('../../app/authentication/actions')
  })
  it('renders without crashing', function () {
    expect(renderer.create(
      <App/>
    )).toMatchSnapshot()
  });
});


