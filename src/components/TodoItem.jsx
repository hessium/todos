import React from 'react'

const TodoItem = ({todo}) => {
  return (
    <div className='todo__item'>
        <h2>{todo.id}. {todo.title}</h2>
        <button>
            Выполнил
        </button>
        <button>
            Удалить
        </button>
    </div>
  )
}

export default TodoItem
