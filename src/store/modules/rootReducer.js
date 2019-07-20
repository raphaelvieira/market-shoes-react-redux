import { combineReducers } from 'redux';
import cart from './cart/reducer';

/** combine all reducers */
export default combineReducers({ cart });
