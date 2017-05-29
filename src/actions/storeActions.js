import axios from 'axios';

const request = axios.create({
  baseURL: '/api'
});

export function getStores() {
  return async dispatch => {
    dispatch({
      type: 'STORE_LOADING'
    });

    const response = await request.get('/stores');
    dispatch({
      type: 'STORE_FETCH_ALL',
      payload: response.data
    });
  }
}
