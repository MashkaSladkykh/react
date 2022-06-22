import { connect } from "react-redux";
import {addTodo, removeTodo, checkTodo, enterTodo} from '../../store/todos/actions';
import {selectTodos} from '../../store/todos/selectors';

import './styles.scss';


const TodosComponent = ( {todos, addTodo, removeTodo, checkTodo, enterTodo, text} ) => (
    <div className="todos">
      <h1 className="title">Todos</h1>
      <div className="enter-wrap">
      <input
        type="text"
        placeholder="Write your todo here"
        className="enter" 
        value={text} 
        onChange={(text) => enterTodo(text)}            
      />
      <button
        className="add"
        type="submit"
        onClick={() => addTodo(text)}
      >
        Add Todo
      </button>
    </div>
      {!todos
        ?   <div className="empty-list">
                Empty list
            </div>
        : (
            <ul className="list">
            {todos.map(({ id, text, checked }) => (
               <li className="item">
               <div className={checked ? "value checked" : "value"}>
                 <input
                   className="check"
                   type="checkbox"
                   checked={checked}
                   onClick={() => checkTodo(id)}
                 />
                 {text}
               </div>
               <button onClick={() => removeTodo(id)}>
                 x
               </button>
             </li>
            ))}
          </ul>
        )
      }
    </div>
  )



  const mapStateToProps = state => ({
    todos: selectTodos(state),
  })
  
  const mapDispatchToProps = {
    addTodo,
    removeTodo,
    checkTodo,
    enterTodo
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(TodosComponent);

