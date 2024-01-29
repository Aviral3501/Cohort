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
},{
    title: "Study React.js" ,
    description : "Watch tutorial till 12 pm" ,
    completed:false
  
}]);

function addTodo(){
  setTodos([...todos,{
    title:"new todo",
    description:"new description"
  }])

  // ... means that it returns old set of data along with new data 
  // i.e. [1,2,3,] + 4 will give [1,2,3,4,] and so on
}

  return (
    <>
        <div>
          <button onClick={addTodo}>Add a  todo</button>
          {
            todos.map(function(todo){
              return <Todo title={todo.title} description={todo.description}></Todo>
            })
          }
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
