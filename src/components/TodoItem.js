import React from "react";
import "../style/TodoList.css";
function TodoItem({ todo, onDeleteTodo }) {
  const { id, name, dates, type, status } = todo;

  function handleDelete() {
    onDeleteTodo && onDeleteTodo(id);
  }

  return (
    // <div className="todo-item">
    //   <div className="name">{name}</div>
    //   <div className="date">{dates}</div>
    //   <div className="type">{type}</div>
    //   <div className="status">{status}</div>
    //   <div className="actions">
    //     {/* <button onClick={handleDelete}>Delete</button> */}
    //   </div>
    // </div>
    <tr className="todo-item">
      <td className="name">{name}</td>
      <td className="date">{dates}</td>
      <td className="type">{type}</td>
      <td className="status">{status}</td>
      {/* <td className="actions">
        <button onClick={handleDelete}>Delete</button>
      </td> */}
    </tr>
  );
}

export default TodoItem;
