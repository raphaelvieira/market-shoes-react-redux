import produce from 'immer';

/** reducer */
export default function cart(state = [], action) {
  /** state:  state before the action.
   * Every dispatchs triggers all reducers, so in each reducer have to add a switch for do something in a spefic type.
   *
   */
  switch (action.type) {
    case '@cart/ADD':
      return produce(state, draft => {
        /** if exists update amount else include a new product */

        /** easier way to handle with state using immer */
        const productIndex = draft.findIndex(p => p.id === action.product.id);

        if (productIndex >= 0) {
          draft[productIndex].amount += 1;
        } else {
          draft.push({ ...action.product, amount: 1 });
        }
      });

    case '@cart/REMOVE':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });

    default:
      return state;

    /*  return [
        ...state,
        {
          ...action.product,
          amount: 1,
        },
      ]; */
  }
}
