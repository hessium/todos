import React from 'react'

const TodoItem = ({todo, number}) => {
  return (
    <div className='todo__item'>
        <h2>{number}. {todo.title}</h2>
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
