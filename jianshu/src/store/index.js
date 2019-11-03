
import reducer from './reducer'
import { createStore, applyMiddleware, compose } from 'redux';

//const store = createStore(reducer);

const store = createStore(reducer, /* preloadedState, */ compose(
    applyMiddleware(...middleware)
  ));


export default store;