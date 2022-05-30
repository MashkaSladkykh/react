import React, {useState} from 'react';

import TodosComponent from "./component";

import './styles.scss';

const Todos= () => {
 
  const [state, setState] = useState ({
    enterTodo: '',
    todos: [],
  })

  const handleEnterTodo = e => {
    setState({
      ...state,
       enterTodo: e.target.value
    })
  }

  const handleAddTodo = () => {
    const { enterTodo, todos } = state;
    const newTodo = {
      id: Math.round(Math.random() * 100),
      value: enterTodo,
      checked: false,
    }
    if(enterTodo !== ''){    
    setState({
      enterTodo: '',
      todos: [...todos, newTodo]
    })}
  }

  const handleRemoveTodo = todoId => {
    const { todos } = state;
    const updatedTodos = todos.filter(todo => todoId !== todo.id);

    setState({
      ...state,
      todos: updatedTodos
    })
  }

  const handleCheckTodo = todoId => {
    const { todos } = state;
    const changedTodos = todos.map(todo => {
      if (todoId === todo.id){
        return {
            ...todo,
            checked: !todo.checked,
        };
      }
      return todo;
    });

    setState({
        ...state,
        todos: changedTodos,
    })
    
  }

  const isTodosEmpty = state.todos.length === 0;
  
  return (
    <TodosComponent
      enterTodo={state.enterTodo}
      todos={state.todos}
      isTodosEmpty={isTodosEmpty}
      onEnterTodo={handleEnterTodo}
      onAddTodo={handleAddTodo}
      onRemoveTodo={handleRemoveTodo}
      onCheckTodo={handleCheckTodo}
    />
  )
  
}

export default Todos;