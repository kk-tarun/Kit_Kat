import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import data from '../data/todos.json';
import '../style/TodoList.css';


function TodoList() {
  const [todos, setTodos] = useState([]);

  function handleDeleteTodo(todoId) {
    setTodos(todos.filter(todo => todo.id !== todoId));
  }

  return (
    <div>
       <table>
        <thead>
          <th className="name-column">Name</th>
          <th className="date-column">Date</th>
          <th className="type-column">Type</th>
          <th className="status-column">Status</th>
        </thead>
        <tbody>
          {data.map(todo => (
            <TodoItem key={todo.id} todo={todo} onDeleteTodo={handleDeleteTodo} />
          ))}
        </tbody>
      </table>
      {/* <AddTodoForm onAddTodo={handleAddTodo} /> */}
    </div>
  );
}

export default TodoList;
