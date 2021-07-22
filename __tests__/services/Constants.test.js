import {GET_URL} from '../../src/services/Constants';

describe('Constants', () => {
  const url = GET_URL.RANDOM_USER_URL + '1';
  it('renders correctly with random user url values', async () => {
    expect(url).toEqual('https://randomuser.me/api?results=1');
  });
});
