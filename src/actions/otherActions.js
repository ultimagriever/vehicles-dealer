import axios from 'axios';

const request = axios.create({
  baseURL: 'http://localhost:3333/api'
});

export function getOthers() {
  return async dispatch => {
    dispatch({
      type: 'OTHER_LOADING'
    });

    console.log('getOthers - loading');

    return new Promise(function(resolve) {
      setTimeout(async function () {
        const response = await request.get('/others');

        console.log('getOthers - loaded');

        dispatch({
          type: 'OTHER_FETCH_ALL',
          payload: response.data
        });

        resolve();
      }, 1000);
    });
  }
}
