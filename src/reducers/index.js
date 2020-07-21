import { combineReducers } from 'redux'
import favoriteReducer from './favoriteReducer';
import filterByLocationReducer from './filterByLocationReducer';
import getRoomReducer from './getRoomReducer';


export default combineReducers({
  favoriteReducer,
  filterByLocationReducer,
  getRoomReducer
});
