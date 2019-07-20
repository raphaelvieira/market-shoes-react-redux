/** reducer */
export default function cart(state = [], action) {
  /** state:  state before the action.
   * Every dispatchs triggers all reducers, so in each reducer have to add a switch for do something in a spefic type.
   *
   */
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.product];
    default:
      return state;
  }
}
