import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos, remove, completed}) => {
  return (
    <div>
        {todos.map((todo, index) =>
            <TodoItem completed={completed} remove={remove} number={index  + 1} todo={todo} key={todo.id}/>        
        )}
    </div>
  );
};

export default TodoList;
