import { createStore, combineReducers } from 'redux';
import todos from './reducers/todos';

export default createStore(combineReducers({ todos }));
