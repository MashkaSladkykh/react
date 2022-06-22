import {combineReducers} from "redux";

import {counter} from './counter/reducer';
import {users} from './users/reducer';
import {Todos} from './todos/reducer';

const rootReducer = combineReducers({
  counter,
  users,
  Todos,
});

export default rootReducer;