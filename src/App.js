import './App.css';
import React, {useState} from 'react';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
function App() {

  const [todos, setTodo] = useState([ 
    { id : '1', title : 'купить хлеб', completed : false},
    { id : '2', title : 'купить чай', completed : false},
    { id : '3', title : 'купить сыр', completed : false}
  ])

  return (
    <div className="App">
      <header className="App-header">
        Todo
      </header>
      <form >
          <input/>
          <button>
            Добавить
          </button>
      </form>
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
