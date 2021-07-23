import React from 'react';
import enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PopupModal from '../../src/components/PopupModal/PopupModal';

enzyme.configure({adapter: new Adapter()});

describe('PopupModal component validation', () => {
  it('renders correctly with PopupModal detail elments', async () => {
    const wrapper = shallow(<PopupModal />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with text elements', async () => {
    const wrapper = shallow(<PopupModal />);
    expect(wrapper.find('Text')).toHaveLength(4);
  });
});
