import React from 'react';
import enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import OverLay from '../../src/components/OverLay/OverLay';

enzyme.configure({adapter: new Adapter()});

describe('Overlay component validation', () => {
  it('renders correctly with Overlay detail elments', async () => {
    const wrapper = shallow(<OverLay />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with text elements', async () => {
    const wrapper = shallow(<OverLay />);
    expect(wrapper.find('Text')).toHaveLength(4);
  });
});
