
import reducer from './reducer'
import { createStore, applyMiddleware, compose } from 'redux';

//const store = createStore(reducer);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers());


export default store;