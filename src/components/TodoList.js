import React, { useState } from "react";
import TodoItem from "./TodoItem";
import "../style/TodoList.css";
import AddTodoForm from "./AddTodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);

  function handleAddTodo(newTodo) {
    setTodos([...todos, newTodo]);
    setCount(count+1);
  }

  function handleDeleteTodo(todoId) {
    setTodos(todos.filter((todo) => todo.id !== todoId));
    setCount(count-1)
  }

  return (
    <div className="todo-list">
      <AddTodoForm onAddTodo={handleAddTodo} />
      <table className="tableBody">
        <thead>
          <tr className="header">
            <th className="name-column"><i className="fa fa-regular fa-clipboard"></i>  Name</th>
            <th className="des-column"><i className="fa fa-solid fa-calendar"></i>  Date</th>
            <th className="type-column"><i className="fa fa-regular fa-circle-play"></i>  Type</th>
            <th className="status-column"><i className="fa fa-regular fa-rectangle-list"></i>  Status</th>
            <th className="status-column"><i className="fa fa-regular fa-square-check"></i>  Activity</th>
          </tr>
        </thead>
        <tbody className="body">
          {todos !== [] &&
            todos.map((todo, index) => (
              <TodoItem
                key={index}
                todo={todo}
                onDeleteTodo={handleDeleteTodo}
              />
            ))}
        </tbody>
      </table>
      {todos.length === 0 &&
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          style={{
            margin: '40px auto',
            width: '100%',
            height: '500px',
            border: '2px dashed #c0c0c0',
            backgroundColor: 'transparent'
          }}
        >
          <i class="fa-solid fa-file-pen" style={{ fontSize: '100px' }}></i>
          <br />
          <br />
          <span style={{ marginLeft: '-25px' }}>Click to add Task</span>
        </button>
      }
    </div>
  );
}

export default TodoList;
