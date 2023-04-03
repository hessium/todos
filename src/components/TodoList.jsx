import React from "react";
import TodoItem from "./TodoItem";


const TodoList = ({ todos, remove, completed, edit, filter, FILTER_MAP }) => {
  return (
    <div className="todo-list">
      {todos.filter(FILTER_MAP[filter])
      .map((todo, index) => (
        <TodoItem
          edit={edit}
          completed={completed}
          remove={remove}
          number={index + 1}
          todo={todo}
          key={todo.id}
        />
      ))}
    </div>
  );
};

export default TodoList;
