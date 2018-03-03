import React from 'react';
import App from '../../app/index';

import { shallow } from 'enzyme'

it('renders without crashing', () => {
  expect(shallow(<App/>)).toBeTruthy();
});

