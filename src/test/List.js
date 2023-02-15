// List.js
import { useContext } from 'react'
import { TodoContext } from './TodoContext'

export const List = () => {
  // глобальное состояние
  const [todos] = useContext(TodoContext)

  return (
    <ul>
      {todos.map(({ id, text }) => <li key={id}>{text}</li>)}
    </ul>
  )
}