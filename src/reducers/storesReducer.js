import { combineReducers } from 'redux';

export default combineReducers({
  all: function (state = [], action) {
    switch (action.type) {
      case 'STORE_FETCH_ALL':
        return action.payload;
      default:
        return state;
    }
  },
  loading: function (state = false, action) {
    switch (action.type) {
      case 'STORE_LOADING':
        return true;
      case 'STORE_FETCH_ALL':
        return false;
      default:
        return state;
    }
  }
});
