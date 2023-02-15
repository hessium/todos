import './App.css';
import React, {useState, useEffect} from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
 

  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    
  
  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  const removeTodo = (todo) => {
    setTodos(todos.filter(p => p.id !== todo.id))
  }

  const completedTodo = (todo) => {
    setTodos(todos => {
      return todos.map(item => {
        return item.id === todo.id ? { ...item, completed: item.completed === true ? false : true } : item
      })
    })
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
      <TodoList completed={completedTodo} remove={removeTodo} todos={todos}/>
    </div>
  );
}

export default App;
