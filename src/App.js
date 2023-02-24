// import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import SignUp from "./components/Signup/SignUp";
import { auth } from "./firebase";

function App() {
  const [username, setUsername] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUsername(
          user.email.substring(0, user.email.indexOf("@")).toUpperCase()
        );
      } else setUsername("");
    });
  }, []);

  return (
    <div id="particles-js">
      <div className="App">
        <h1>TimeTrackr</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/todo" element={<TodoList name={username} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
