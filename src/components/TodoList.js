import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
// import '../data/todos.json';
import data from '../data/todos.json';
import '../style/TodoList.css';


function TodoList() {
  const [todos, setTodos] = useState([]);
//  const getData = () => {
//     fetch('../data/todos.json')
//       .then(response => {
//         console.log(response);
//         return response.json();
//       })
//       .then(todos => {
//         console.log(todos);
//         setTodos(todos)
//       })
//       .catch(error => console.error(error));
//       console.log(todos);
//   }
 
//   useEffect(() => {
//     // Fetch the initial todos from the data.json file
//     getData();
//    }, []);

  function handleAddTodo(newTodo) {
    setTodos([...todos, newTodo]);
  }

  function handleDeleteTodo(todoId) {
    setTodos(todos.filter(todo => todo.id !== todoId));
  }

  return (
    <div className="todo-list">
      {/* <div className="header">
        <div className="name-column">Name</div>
        <div className="date-column">Date</div>
        <div className="type-column">Type</div>
        <div className="status-column">Status</div>
      </div>
      <div className="body">
        {data.map(todo => (
          <TodoItem key={todo.id} todo={todo} onDeleteTodo={handleDeleteTodo} />
        ))}
      </div> \*/}
       <table className='tableBody'>
        <thead>
          <tr className="header">
            <th className="name-column">Name</th>
            <th className="date-column">Date</th>
            <th className="type-column">Type</th>
            <th className="status-column">Status</th>
          </tr>
        </thead>
        <tbody className="body">
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
