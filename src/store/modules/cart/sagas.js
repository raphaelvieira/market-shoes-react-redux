/** redux-saga implementatiom */

import { call, select, put, all, takeLatest } from 'redux-saga/effects';
/**
call: async methods that return promisses
put: dipacth an action
all: listeners
takeLatest: get the lastest call if the previous api call was not finished
takeEvery: get all calls
select: handle state on saga

*/
import api from '../../../services/api';
import formatPrice from '../../../util/format';
import { addToCartSuccess, updateAmount } from './actions';

/**
 * Refactoring to add busssines under the saga
 *
 */
/** equivalent to async await */
function* addToCart({ id }) {
  const productExists = yield select(state =>
    state.cart.find(p => p.id === id)
  );

  if (productExists) {
    const amount = productExists.amount + 1;
    yield put(updateAmount(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };
    yield put(addToCartSuccess(data));
  }
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
