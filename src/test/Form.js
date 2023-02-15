// Form.js
import { useState, useContext } from 'react'
import { TodoContext } from './TodoContext'

export const Form = () => {
  // локальное состояние
  const [text, setText] = useState('')
  // глобальное состояние
  const [todos, setTodos] = useContext(TodoContext)

  const handleChange = ({ target: { value } }) => {
    setText(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newTodo = {
      id: Date.now(),
      text
    }

    setTodos([...todos, newTodo])

    setText('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Текст задачи: <br />
        <input
          type='text'
          value={text}
          onChange={handleChange}
        /> <br />
        <button>Добавить</button>
      </label>
    </form>
  )
}