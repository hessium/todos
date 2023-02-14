import React from 'react'

const TodoForm = ({}) => {
    const addNewTodo = (e) => {
        e.preventDefault();
        
        setTodos([...todos, {...quest, id: Date.now}]);
        setQuest({ title: '' });
      }
  return (
    <form >
    <input type='text' 
    placeholder='Добавить задание' 
    value={quest.title}
    onChange={e => setQuest({...quest, title: e.target.value})}
    />
    <button onClick={addNewTodo}>
      Добавить
    </button>
</form>
  )
}

export default TodoForm

