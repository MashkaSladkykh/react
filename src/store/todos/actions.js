import { ADD_TODO, REMOVE_TODO, CHECK_TODO, ENTER_TODO } from "./types";

let nextTodoId = 0;

export const enterTodo = (e) => ({
    type: ENTER_TODO,
    text: e.target.value
})

export const addTodo = text => ({
    type: ADD_TODO,
    id: nextTodoId++,
    text
});

export const removeTodo = id => ({
    type: REMOVE_TODO, 
    id
});

export const checkTodo = ({id, checked}) => ({
    type: CHECK_TODO, 
    id,
    checked
})

