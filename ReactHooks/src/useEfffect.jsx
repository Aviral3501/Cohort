import React, { useEffect, useState } from 'react'
import axios from "axios"

const App = () => {
  const [selectedId , setSelectedId] = useState(1);
  return (
    <div>
      <button onClick={()=>{setSelectedId(1)}}>1</button>
      <button onClick={()=>{setSelectedId(2)}}>2</button>
      <button onClick={()=>{setSelectedId(3)}}>3</button>
      <button onClick={()=>{setSelectedId(4)}}>4</button>
      <Todo id={selectedId}/>
    </div>
  )
}


function Todo({id}){
  const [todo ,setTodo] = useState([]);
 

  useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/todo?id=" + id)
    .then(response=>{
      setTodo(response.data.todo)
    })
  },[id])


  return(

    <>
     
    <div>
      <h1>{todo.title}</h1>
      <p>{todo.description}</p>
    </div>
    </>
  )
}

export default App
