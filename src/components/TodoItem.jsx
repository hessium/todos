import React, { useState } from "react";
import { IconContext } from "react-icons";
import { TiDeleteOutline } from 'react-icons/ti';

const TodoItem = ({ todo, remove, completed, edit }) => {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");

  function handleChange(e) {
    setNewName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    edit(todo.id, newName);
    setNewName("");
    setEditing(false);
  }

  const editingTemplate = (
    <form className="form form__bottom" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          id={todo.id}
          className="todo-text"
          type="text"
          placeholder={todo.title}
          value={newName}
          onChange={handleChange}
        />
      </div>
      <div className="btn-group">
        <button type="submit" className="btn  todo__edit">
          Сохранить
        </button>
        <button
          type="button"
          className="btn btn__cancel"
          onClick={() => setEditing(false)}
        >
            Отменить
        </button>
      </div>
    </form>
  );
  const viewTemplate = (
    <div className="todo__item">
      <div className="todo__header">
        
          <input
            className="todo__input--checkbox custom-checkbox"
            id={todo.id}
            type="checkbox"
            defaultChecked={todo.completed}
            onChange={() => completed(todo)}
          />
        <label htmlFor={todo.id}></label>
        <label className="todo__title" htmlFor={todo.id}>
          {todo.title}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn" onClick={() => setEditing(true)}>
          Изменить
        </button>
        <button
          type="button" 
          className="btn btn__danger"
          onClick={() => remove(todo)}
        >
          <IconContext.Provider value={{ size: "40px" }}>
              <TiDeleteOutline   />
        </IconContext.Provider>
        </button>
      </div>
    </div>
  );

  return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
};

export default TodoItem;
