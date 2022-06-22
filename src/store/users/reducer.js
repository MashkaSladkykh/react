import {SET_USERS, REMOVE_USER} from './types';

const initialState = [];

export const users = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return [...new Set(action.users)];
    case REMOVE_USER:
      console.log(action, state, 'reducer')
      return state.filter(user => user.id !== action.userId);
    default:
      return state;
  }
}