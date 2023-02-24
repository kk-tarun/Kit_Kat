import React, { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid"; 

function AddTodoForm({ onAddTodo }) {
  const [newTodo, setNewTodo] = useState({
    id: "",
    name: "",
    date: new Date().toISOString().substring(0, 10),
    type: "",
    status: "",
  });
  const dateInputRef = useRef();

  function handleChange(event) {
    const { name, value } = event.target;
    setNewTodo({
      ...newTodo,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const todoWithId = {
      ...newTodo,
      id: uuidv4(),
    };
    onAddTodo && onAddTodo(todoWithId);
    setNewTodo({
      id: "",
      name: "",
      date: "",
      type: "",
      status: "",
    });
    dateInputRef.current.value = ""; 
  }

  useEffect(() => {
    dateInputRef.current.value = newTodo.date;
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={newTodo.name}
        onChange={handleChange}
        required
      />
      <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        name="date"
        ref={dateInputRef}
        value={newTodo.date}
        onChange={handleChange}
        required
      />
      <label htmlFor="type">Type:</label>
      <input
        type="text"
        id="type"
        name="type"
        value={newTodo.type}
        onChange={handleChange}
        required
      />
      <label htmlFor="status">Status:</label>
      <input
        type="text"
        id="status"
        name="status"
        value={newTodo.status}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default AddTodoForm;