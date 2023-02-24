import React from "react";
import "../style/TodoList.css";
function TodoItem({ todo, onDeleteTodo }) {
  const { id, name, date, type, status } = todo;

  function handleDelete() {
    onDeleteTodo && onDeleteTodo(id);
  }

  return (
    <tr className="todo-item">
      <td className="name">{name}</td>
      <td className="des">{date}</td>
      <td className="type">{type}</td>
      <td className="status">{status}</td>
      <td className="actions">
        {/* <button onClick={handleDelete}>Delete</button> */}
        <i className="fa fa-solid fa-check-double" onClick={handleDelete}></i>
      </td>
    </tr>
  );
}

export default TodoItem;
