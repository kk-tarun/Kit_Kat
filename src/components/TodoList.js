import React, { useState } from "react";
import TodoItem from "./TodoItem";
import data from "../data/todos.json";
import "../style/TodoList.css";
import AddTodoForm from "./AddTodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  function handleAddTodo(newTodo) {
    setTodos([...todos, newTodo]);
  }

  function handleDeleteTodo(todoId) {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  }

  return (
    <div className="todo-list">
      <AddTodoForm onAddTodo={handleAddTodo} />
      <table className="tableBody">
        <thead>
          <tr className="header">
            <th className="name-column">Name</th>
            <th className="des-column">Description</th>
            <th className="type-column">Type</th>
            <th className="status-column">Status</th>
            <th className="status-column">Activity</th>
          </tr>
        </thead>
        <tbody className="body">
          {todos !== [] &&
          todos.map((todo,index) => (
            <TodoItem
              key={index}
              todo={todo}
              onDeleteTodo={handleDeleteTodo}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodoList;
