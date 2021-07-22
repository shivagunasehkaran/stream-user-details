import {GET_URL} from './Constants';

export async function useFetchRandomUserAPI(count) {
  const url = GET_URL.RANDOM_USER_URL + `${count}`;
  return fetch(url)
    .then(response => response.json())
    .then(responseJson => {
      return responseJson.results;
    })
    .catch(err => {
      return Promise.reject(err);
    });
}
