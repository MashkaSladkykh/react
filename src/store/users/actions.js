
import {SET_USERS, REMOVE_USER} from './types';

export const setUsers = users => ({
  type: SET_USERS,
  users
});

export const removeUser = userId => ({
  type: REMOVE_USER,
  userId,
});