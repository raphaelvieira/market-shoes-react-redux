/** redux-saga implementatiom */

import { call, put, all, takeLatest } from 'redux-saga/effects';
/**
call: async methods that return promisses
put: dipacth an action
all: listeners
takeLatest: get the lastest call if the previous api call was not finished
takeEvery: get all calls

*/
import api from '../../../services/api';
import { addToCartSuccess } from './actions';

/** equivalent to async await */
function* addToCart({ id }) {
  const response = yield call(api.get, `/products/${id}`);
  yield put(addToCartSuccess(response.data));
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
