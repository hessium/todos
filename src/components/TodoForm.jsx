import React, {useState} from 'react';


const TodoForm = ({create}) => {

  const [quest, setQuest] = useState({ title: '' });

    const addNewTodo = (e) => {
        e.preventDefault();
        const newTodo = {
          ...quest, id: Date.now(), completed : false
        }
        create(newTodo);
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

