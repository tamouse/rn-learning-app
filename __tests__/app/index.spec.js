import React from 'react';
import App from '../../app/index';
import { shallow } from 'enzyme'

describe('Testing the global App', function () {
  beforeEach(function () {
    jest.mock('../../app/authentication/actions')
  })
  it('renders without crashing', () => {
    expect(shallow(<App/>)).toBeTruthy();
  });
  it('matches the snapshot', function () {
    expect(shallow(<App/>)).toMatchSnapshot()
  });
});


