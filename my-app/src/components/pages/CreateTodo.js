import React from 'react'
import Footer from "../Footer";
import SearchBar from "../SearchBar";
import Todo from '../Todo';




function CreateTodo() {

  return (

    <div>
      
      <SearchBar/>
        <h1>Here You can Create Your ToDo List:</h1>
        
      <div className='todo-app'>
      <Todo/>
    </div>
    <Footer/>
    </div>
  )
}

export default CreateTodo
