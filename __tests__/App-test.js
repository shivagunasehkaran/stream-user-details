/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({adapter: new Adapter()});

it('renders correctly', async () => {
  let snapshot;
  snapshot = shallow(<App />);
  expect(snapshot).toMatchSnapshot();
});
