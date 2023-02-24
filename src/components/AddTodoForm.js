import React, { useState } from "react";

function AddTodoForm({ onAddTodo }) {
  const [newTodo, setNewTodo] = useState({
    name: "",
    // date: "",
    date: "",
    type: "",
    status: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNewTodo({
      ...newTodo,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    onAddTodo && onAddTodo(newTodo);
    setNewTodo({
      name: "",
    //   date: "",
      date: "",
      type: "",
      status: "",
    });
    console.log(newTodo);
    
  }

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
      <label htmlFor="date">date:</label>
      <input
      type="date"
        id="date"
        name="date"
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
