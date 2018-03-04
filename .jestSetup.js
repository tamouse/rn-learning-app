/*
 * set up for Jest testing.
 */

require("react-native-mock/mock")

// for setting up enzyme to work with React 16
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

global.fetch = require('jest-fetch-mock');
