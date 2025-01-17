import { useState } from "react";

const TodoItem = ({ todo, onToggleTodo, onEditTodo, onDeleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.title);

  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
        />
        <div className="control">
        <button
          className="save"
          onClick={() => {
            onEditTodo(todo.id, editValue);
            setIsEditing(false);
          }}
        >
          Save
        </button>
        <button
          className="cancel"
          onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      </>
    );
  } else {
    taskContent = (
      <>
        <span className="content">{todo.title}</span>
        <div className="control">
          <i className="fa-regular fa-pen-to-square" onClick={() => setIsEditing(true)} />
          <i className="fa-regular fa-trash-can" onClick={() => onDeleteTodo(todo.id)} />
        </div>
      </>
    );
  }

  return (
    <li draggable="true" className={todo.done ? 'checked' : ''}>
      <span 
        className="checkbox"
        onClick={() => onToggleTodo(todo.id)}
      ></span>
      {taskContent}
    </li>
  );
};

export default TodoItem;
