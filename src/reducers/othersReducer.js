import { combineReducers } from 'redux';

export default combineReducers({
  all: function (state = [], action) {
    switch (action.type) {
      case 'OTHER_FETCH_ALL':
        console.log('OTHER reducer - all');
        return action.payload;
      default:
        return state;
    }
  },
  loading: function (state = false, action) {
    switch (action.type) {
      case 'OTHER_LOADING':
        return true;
      case 'OTHER_FETCH_ALL':
        return false;
      default:
        return state;
    }
  }
});
