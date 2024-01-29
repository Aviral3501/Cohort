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
          <Todo title="Aviral1" description="gym ja" completed="done"></Todo>
          <Todo title="Aviral2" description="gym ja" completed="done"></Todo>
          {/* how to pass whats in the useState */}
          <Todo title={todos[0].title} description={todos[0].description}></Todo>
          <Todo title={todos[1].title} description={todos[1].description}></Todo>
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
