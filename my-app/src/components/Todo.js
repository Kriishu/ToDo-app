import React from "react";
import "./todo.css"
import {useNavigate} from 'react-router-dom';



const Todo = () => {
  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState("");
  const [todoEditing, setTodoEditing] = React.useState(null);
  const [editingText, setEditingText] = React.useState("");
  const [editingDesc, setEditingDesc] = React.useState("");
  const navigate = useNavigate();
  const [ date, setDate] = React.useState('');
  const [ desc, setDesc] = React.useState('');
  
  
  


  const navigateHome = () => {
    navigate('/');
  };

  React.useEffect(() => {
    const json = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(json);
    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);

  React.useEffect(() => {
    const json = JSON.stringify(todos);
    localStorage.setItem("todos", json);
  }, [todos]);

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
      desc,
      date
    };
    setTodos([...todos].concat(newTodo));
    setTodo("");
  }

  function deleteTodo(id) {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  function toggleComplete(id) {
    let updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  function submitEdits(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;
        todo.desc = editingDesc;
       
      }
      return todo;
    });
    setTodos(updatedTodos);
    setTodoEditing(null);
  }

  return (
    <div id="todo-list">
      <form onSubmit={handleSubmit}>
        <p>Name:</p>
        <input  
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <p>Description:</p>
        <input
          type="text"
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
        />
        <p>Date:</p>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
        <button type="submit">Add Todo</button>
        <div className="cancel-button">
        <button onClick={navigateHome}>Cancel</button>
        </div>
      </form>
      {todos.map((todo) => (
        <div key={todo.id} className="todo">
          <div className="todo-text">
            <input
              type="checkbox"
              id="completed"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />

            
            {todo.id === todoEditing ? (
              <><input
            type="text"
            onChange={(e) => setEditingText(e.target.value)} /><input
            type="text"
            onChange={(e) => setEditingDesc(e.target.value)} /></>

            ) : (
              <div>
                <p>Task: {todo.text} </p>
                <p>Description: {todo.desc}</p>
                <p>Date: {todo.date}</p>

              </div>
            )}
          </div>
          <div className="todo-actions">
            {todo.id === todoEditing ? (
              <button onClick={() => submitEdits(todo.id)}>Submit Edits</button>
            ) : (
              <button onClick={() => setTodoEditing(todo.id)}>Edit</button>
            )}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todo;