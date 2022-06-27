import { useDispatch, useSelector } from "react-redux";
import './style.css';


const Todos =() => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);
    const handleClick = id => dispatch({
      type: 'DELETE_TODO',
      payload:id,
    }) 
    const handleChange = id => dispatch({
      type: 'CHECK_TODO',
      payload: id,
    })
    if(!todos || !todos.length) {
      return <p>NO TODOS</p>
    } return (
      <ul className='list'>
        {todos.map(todo => <li className="item" key={todo.id}>
          <div className={todo.checked ? "value checked" : "value"}>
            <input
              className="check"
              type="checkbox"
              checked={todo.checked}
              onChange={() => handleChange(todo.id)}
            />
            {todo.value}
          </div>
          <button onClick={() => handleClick(todo.id)}>
            x
          </button>
        </li>)}
      </ul>
    )
}

export default Todos;
  
  