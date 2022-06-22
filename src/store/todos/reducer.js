import { ADD_TODO, REMOVE_TODO, CHECK_TODO, ENTER_TODO } from "./types";


export const Todos = (state = [], action) => {
  switch (action.type) {
    case ENTER_TODO:
      return [
        ...state, 
        {
          text: action.text,
        }
      ]
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          // text: action.text,
          checked: false,
        }
      ]
    case REMOVE_TODO:
      return state.filter(todo => action.todoId !== todo.id)

    case CHECK_TODO:
      return state.map(todo => 
        todo.id === action.todoId ? {...todo, checked:!todo.checked}: todo);
    default:
      return state;
  }
}

export default Todos;