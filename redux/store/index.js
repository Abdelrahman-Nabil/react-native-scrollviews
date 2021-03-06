import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';


const store = createStore(
  reducers,
  {},//INITIAL STATE
  compose(
    applyMiddleware(thunk),
  )
);

export default store;
