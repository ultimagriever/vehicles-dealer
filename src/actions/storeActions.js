import axios from 'axios';

const request = axios.create({
  baseURL: 'http://localhost:3333/api'
});

export function getStores() {
  return async dispatch => {
    dispatch({
      type: 'STORE_LOADING'
    });

    console.log('getStores - loading');

    const response = await request.get('/stores');

    console.log('getStores - loaded');

    dispatch({
      type: 'STORE_FETCH_ALL',
      payload: response.data
    });
  }
}
