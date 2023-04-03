import "./App.css";
import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import FilterButton from "./components/FilterButton";

const FILTER_MAP = {
  Все: () => true,
  Активные: (todo) => !todo.completed,
  Выполнил: (todo) => todo.completed
};
const FILTER_NAMES = Object.keys(FILTER_MAP);

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  const [filter, setFilter] = useState('Все');

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const editTodo = (id, newName) => {
    const editedTodo = todos.map((task) => {
      if (id === task.id) {
        return { ...task, title: newName };
      }
      return task;
    });
    setTodos(editedTodo);
  };

  const removeTodo = (todo) => {
    setTodos(todos.filter((p) => p.id !== todo.id));
  };

  const completedTodo = (todo) => {
    setTodos((todos) => {
      return todos.map((item) => {
        return item.id === todo.id
          ? { ...item, completed: item.completed === true ? false : true }
          : item;
      });
    });
  };
  

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton key={name}
    name={name}
    isPressed={name === filter}
    setFilter={setFilter}/>
  ));
 

  return (
    <div className="App">
      <header className="App-header">Todo</header>
      <div className="wrapper">
      <TodoForm create={createTodo} />
      <div className="filters">
      {filterList}
      </div>
      <TodoList
        filter={filter}
        FILTER_MAP={FILTER_MAP}
        completed={completedTodo}
        edit={editTodo}
        remove={removeTodo}
        todos={todos}
      />
      </div>

      
    </div>
  );
}

export default App;
