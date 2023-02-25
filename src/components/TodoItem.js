import React from "react";
import "../style/TodoList.css";
function TodoItem({ todo, onDeleteTodo, onDone, isSelected }) {
  const { id, name, date, type, status } = todo;

  function handleDelete() {
    onDeleteTodo && onDeleteTodo(id);
  }
  function handleDone(){
    onDone && onDone(id);
  }

  return (
    <tr className={isSelected ? "selected todo-item" : "todo-item"}>
      <td className="name">{name}</td>
      <td className="des">{date}</td>
      <td className="type">{type}</td>
      <td className="status">{status}</td>
      <td className="actions">
        {/* <button onClick={handleDelete}>Delete</button> */}
        <i class="fa-solid fa-xmark" onClick={handleDelete}></i>
        <i className="fa fa-solid fa-check-double" onClick={handleDone}></i>
      </td>
    </tr>
  );
}

export default TodoItem;
