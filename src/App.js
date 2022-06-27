import './App.css';
import TodoInput from './components/TodoInput';
import Todos from './components/Todos';

function App() {
  return (
    <div className="todos">
      <h1 className="title">Todo List</h1>
      <TodoInput/>
      <Todos/>
    </div>
  );
}

export default App;
