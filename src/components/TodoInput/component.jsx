import { useDispatch} from "react-redux";
import { useState } from "react";

import './style.css';

const TodoInput = () => {
    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState();
    const handleChange = e => setNewTodo(e.target.value);
    const handleClick = () => {
      if(newTodo){
      dispatch({
      type:'ADD_TODO',
      payload: {
        value: newTodo,
        id: Math.random(),
        checked: false
      }})
    }}

    return(
      <div className="enter-wrap">
        <input type ='text' value={newTodo} onChange={handleChange} placeholder='Please, enter your todo' className="enter"/>
        <button type='submit' onClick={handleClick} className="add">ADD TODO</button>
      </div>
    )
}
export default TodoInput;