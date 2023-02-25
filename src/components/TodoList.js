import React, { useState } from "react";
import TodoItem from "./TodoItem";
import data from "../data/todos.json";
import "../style/TodoList.css";
import AddTodoForm from "./AddTodoForm";

function TodoList() {
  const [todos, setTodos] = useState([{"id":1,"name":"Marcie","date":"17/11/2022","type":"solo","status":"Completed"}]);
  const [selectedTodoId, setSelectedTodoId] = useState(null);
  function handleAddTodo(newTodo) {
    setTodos([...todos, newTodo]);
  }

  function handleDeleteTodo(todoId) {
    setTodos(todos.filter((todo) => todo.id !== todoId));
    setSelectedTodoId(null);
  }
  function handleDoneTodo(todoId) {
    // setSelectedTodoId(todoId);
    if (todoId === selectedTodoId) {
      // if the same todo is clicked again, deselect it
      setSelectedTodoId(null);
    } else {
      // otherwise, select the new todo item
      setSelectedTodoId(todoId);
    }
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
          todos.map((todo,index) => (
            <TodoItem
              key={index}
              todo={todo}
              onDeleteTodo={handleDeleteTodo}
              onDone = {handleDoneTodo}
              isSelected={todo.id === selectedTodoId}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodoList;
