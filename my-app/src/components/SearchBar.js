import React, { useState, useEffect } from "react";

const SearchBar = () => {
  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    setTodos(storedTodos);
  }, []);

  const filteredTodos = todos.filter((todo) =>
    [todo.text, todo.desc].join(" ").toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-container">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search for a todo"
        className="search-input"
      />
      <ul className="search-results">
        {filteredTodos.map((todo) => (
          <li key={todo.text}>
            <h3>{todo.text}</h3>
            <p>{todo.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
