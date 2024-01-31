import { useState } from 'react'
import './App.css'
import { CreateTodo } from './Components/CreateTodo'

function App() {
   const [todos,setTodos]= useState([]);

  return (
    <>
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={""}></Todos>
    </div>
     
    </>
  )
}

export default App
