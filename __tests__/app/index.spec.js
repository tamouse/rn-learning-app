import React from 'react';
import App from '../../app/index';
import { shallow } from 'enzyme'

jest.mock('../../app/authentication/actions')

it('renders without crashing', () => {
  expect(shallow(<App/>)).toBeTruthy();
});
