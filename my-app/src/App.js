import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from "./components/pages/Home";
import CreateTodo from "./components/pages/CreateTodo";



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pages/CreateTodo" element={<CreateTodo/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
