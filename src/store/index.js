import { createStore } from 'redux';
import rootReducer from './modules/rootReducer';

/** for reactotron work with redux */
const enhancer =
  process.env.NODE_ENV === 'development' ? console.tron.createEnhancer() : null;

const store = createStore(rootReducer, enhancer);
export default store;
