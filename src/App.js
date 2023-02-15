import './App.css';
import React, {useState} from 'react';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';
function App() {

  const [todos, setTodos] = useState([ 
    { id : '1', title : 'купить хлеб', completed : false},
    { id : '2', title : 'купить чай', completed : false},
    { id : '3', title : 'купить сыр', completed : false}
  ])

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  const removeTodo = (todo) => {
      setTodos(todos.filter(p => p.id !== todo.id))
  }

  const completedTodo = () => {

  }

  return (
    <div className="App">
      <header className="App-header">
        Todo
      </header>
      <TodoForm  create={createTodo}/>
      <div className='wrapper'>
        <button>
          Все todo
        </button>
        <button>
          Активные
        </button>
        <button>
          Выполненые
        </button>
      </div>
      <TodoList remove={removeTodo} todos={todos}/>
    </div>
  );
}

export default App;
