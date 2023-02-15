import React from 'react'

const TodoItem = ({todo, number, remove, completed}) => {
  return (
    <div className='todo__item'>
        <h2>{number}. {todo.title}</h2>
        <button onClick={() => completed(todo)}>
            Выполнил
        </button>
        <button onClick={() => remove(todo)}>
            Удалить
        </button>
    </div>
  )
}

export default TodoItem
