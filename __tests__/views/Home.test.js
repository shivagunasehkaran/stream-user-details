import React from 'react';
import enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from '../../src/views/Home';

enzyme.configure({adapter: new Adapter()});

describe('Home screen', () => {
  it('renders correctly with all home screen values', async () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
});
