import React from 'react'
import Footer from "../Footer";
import Todo from '../Todo';




function CreateTodo() {
  return (
    <div>
      
        <h1>Here You can Create Your ToDo List:</h1>
      <div className='todo-app'>
      <Todo/>
    </div>
    <Footer/>
    </div>
  )
}

export default CreateTodo
