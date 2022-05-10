import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import filter from './reducers/filters';
import todos from './reducers/todos';

export default createStore(combineReducers({ todos, filter }), composeWithDevTools());
