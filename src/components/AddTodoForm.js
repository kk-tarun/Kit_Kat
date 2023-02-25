import React, { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import '../style/AddTodoForm.css';

function AddTodoForm({ onAddTodo } ) {
  const [newTodo, setNewTodo] = useState({
    id: "",
    name: "",
    date: new Date().toISOString().substring(0, 10),
    type: "",
    status: "",
  });
  const dateInputRef = useRef();
  const [count, setCount] = useState(0);

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
    setCount(count+1)
  }

  useEffect(() => {
    dateInputRef.current.value = newTodo.date;
  });

  return (
    <div>
      {count !== 0 && <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        style={{ float: "right"}}
      >
        Add
      </button>}

      <div
        className="modal fade text-dark"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          style={{ minHeight: "100vh" }}
        >
          <div className="modal-content container-fluid">
            <button
              type="button"
              className="btn-close"
              style={{ float: "right", alignSelf:'flex-end',
            margin:'5px' }}
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col">
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={newTodo.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col">
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
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <label htmlFor="type">Type:</label>
                    <select
                      id="type"
                      name="type"
                      value={newTodo.type}
                      onChange={handleChange}
                      required
                    >
                      <option value="" hidden>
                        --Select Type--
                      </option>
                      <option value="Project">Project</option>
                      <option value="Interview">Interview</option>
                      <option value="Learning">Learning</option>
                    </select>
                  </div>
                  <div className="col">
                    <label htmlFor="status">Status:</label>
                    {/* <input
                      type="text"
                      id="status"
                      name="status"
                      value={newTodo.status}
                      onChange={handleChange}
                      required
                    /> */}
                    <select
                      id="status"
                      name="status"
                      value={newTodo.status}
                      onChange={handleChange}
                      required
                      // defaultValue="Not Started"
                    >
                      <option value=""hidden>--Select Progress--</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Not Started" selected>Not Started</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </div>
                </div>
                <button className="btn btn-primary" type="submit" data-bs-toggle="modal" style={{marginTop:'40px'}}>
                  Add Todo
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTodoForm;
