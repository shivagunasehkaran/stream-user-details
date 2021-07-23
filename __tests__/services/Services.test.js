import {useFetchUserAPI} from '../../src/services/Services';

describe('Random user API tests', () => {
  const random_user_url = 'https://randomuser.me/api?results=1';

  it('handles random api success case', async () => {
    global.fetch = jest.fn(url =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({random_user_url: url}),
      }),
    );

    const response = await useFetchUserAPI(1);
    expect(response.random_user_url).toEqual(random_user_url);
  });
});
