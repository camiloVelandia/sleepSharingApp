import { combineReducers } from 'redux'
import favoriteReducer from './favoriteReducer';
import getRoomReducer from './getRoomReducer';


export default combineReducers({
  favoriteReducer,
  getRoomReducer
});
