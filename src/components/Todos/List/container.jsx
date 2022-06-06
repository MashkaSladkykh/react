import React from "react";
import TodosComponent from "./component";


import "./styles.css";

class Todos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputTodo: '',
            todos: [],
        };
    }

    handleChangeTodo = (e) => {
        this.setState({inputTodo: e.target.value})
    }

    hadleAddTodo = (e) => {
        const {inputTodo, todos} = this.state;

        const newTodo = {
            id: Math.round(Math.random() * 100),
            value: inputTodo,
        }

        this.setState({
            inputTodo: '',
            todos: [...todos, newTodo] 
        })

    }

    handleRemoveTodo = (todoId) => {
        const {todos} = this.state;
        const updatedTodos = todos.filter(todo => todoId !== todo.id);
        this.setState({
            todos: updatedTodos,
        })
    }


    render = () => {
        const {inputTodo, todos } = this.state;
        return (
            <div className="todos">
                <div>
                    <input 
                        type="text"
                        placeholder="Write your todo here" 
                        value={inputTodo} 
                        onChange={this.handleChangeTodo}
                    />
                    <button onClick={this.hadleAddTodo}>Add todo</button>
                </div>
                {todos.length === 0 
                ? <div>Empty list</div> 
                : (
                    <ul>
                    {todos.map(({id, value}) => (
                        <li key={id}>
                            {value}
                            <button onClick={() => this.handleRemoveTodo(id)}>
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
                )}
    
            </div>
        )
    }
    

};

export default Todos;