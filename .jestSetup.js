/**
 * Setup for Jest Testing.
 * This file is processed before each test.
 */


// for setting up enzyme to work with React 16
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

// replaces fetch with a fetch mock
global.fetch = require('jest-fetch-mock');
