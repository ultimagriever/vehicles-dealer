import { combineReducers } from 'redux';
import stores from './storesReducer';
import others from './othersReducer';

export default combineReducers({
  stores,
  others,
  called: (state = {}, action) => {
    return state;
  }
});
