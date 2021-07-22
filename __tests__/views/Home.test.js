import React from 'react';
import enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Alert} from 'react-native';
import Home from '../../src/views/Home';
import * as ServicesAPI from '../../src/services/Services';

enzyme.configure({adapter: new Adapter()});

describe('Home screen: snapshot', () => {
  it('renders correctly with all home screen values', async () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Home screen : random user API', () => {
  it('random user api success', async () => {
    const spy = jest
      .spyOn(ServicesAPI, 'useFetchRandomUserAPI')
      .mockImplementation(url => {
        return new Promise(resolve => resolve('test'));
      });
    await new Promise(resolve => setTimeout(resolve, 100));
    expect(spy).toHaveBeenCalledWith({url: 'http://dummyURL.com/'});
  });

  it('random api with error message', async () => {
    jest.spyOn(ServicesAPI, 'useFetchRandomUserAPI').mockImplementation(url => {
      return new Promise(resolve => resolve([]));
    });
    await new Promise(resolve => setTimeout(resolve, 100));
  });
});

describe('Home screen : flatlist', () => {
  it('should flatlist return keyExtractor correctly', () => {
    const item = [
      {
        id: '1',
        iconUrl: '/test.png',
        title: 'Mr.',
        firstName: 'shiva',
        lastName: 'gautham',
        phone: '23423424',
      },
      {
        id: '2',
        iconUrl: '/test.png',
        title: 'Mrs.',
        firstName: 'daniel',
        lastName: 'shiva',
        phone: '23423424',
      },
    ];
    const wrapper = shallow(<Home item={item} />);
    expect(wrapper.find('FlatList').length).toEqual(1);
  });
});
