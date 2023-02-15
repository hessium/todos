import React from 'react'

const TodoItem = ({todo, number, remove}) => {
  return (
    <div className='todo__item'>
        <h2>{number}. {todo.title}</h2>
        <button>
            Выполнил
        </button>
        <button onClick={() => remove(todo)}>
            Удалить
        </button>
    </div>
  )
}

export default TodoItem
