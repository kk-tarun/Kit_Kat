import React from "react";
import "../style/TodoList.css";
function TodoItem({ todo, onDeleteTodo }) {
  const { id, name, dates, type, status } = todo;

  function handleDelete() {
    onDeleteTodo && onDeleteTodo(id);
  }

  return (
    <tr className="todo-item">
      <td className="name">{name}</td>
      <td className="date">{dates}</td>
      <td className="type">{type}</td>
      <td className="status">{status}</td>
      <td className="actions">
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
}

export default TodoItem;
