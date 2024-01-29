import { useState } from 'react'

function App() {

  const [todos , setTodos] = useState([{
    title: "GO to gym",
  description:"GO to gym from 7-9",
  completed:true
} , {
  title: "Study React.js" ,
  description : "Watch tutorial till 12 pm" ,
  completed:false
}]);


  return (
    <>
        <div>
          <Todo title="Aviral" description="gym ja" completed="done"></Todo>
        </div>
    </>
  )
}

//component todo item 
///todo app {
//   title
//   description
//   completed
// }


function Todo(props){
  return <div>
        <h1>{props.title}</h1>
        <h1>{props.description}</h1>
        <h1>{props.completed}</h1>
  </div>
}


export default App
