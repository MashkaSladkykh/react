import { useDispatch } from "react-redux";
import { useState } from "react";

import './style.css';

const TodoInput = () => {
    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState();
    const handleChange = e => setNewTodo(e.target.value);
    let nextTodoId = 0;
    const handleClick = () => dispatch({
      type:'ADD_TODO',
      payload: {
        value: newTodo,
        id: nextTodoId++,
        checked: false
      }
    })
  
    return(
      <div className="enter-wrap">
        <input type ='text' value={newTodo} onChange={handleChange} className="enter"/>
        <button type='submit' onClick={handleClick} className="add">ADD TODO</button>
      </div>
    )
}
export default TodoInput;