import { combineReducers } from 'redux';
import storesReducer from './storesReducer';

export default combineReducers({
  stores: storesReducer
});
