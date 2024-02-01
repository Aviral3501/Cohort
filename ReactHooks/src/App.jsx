import { useState } from "react";
let count =3;

function App(){
  const [todos , setTodos] = useState([
    {id:1, title:"first" , description:"desc1"},
    {id:2, title:"second" , description:"desc2"},
    {id:3, title:"third" , description:"desc3"}
  ])

  function addTodo(){
      useState([...todos , {
        id:count+1,
        title:Math.random(),
        description:Math.random()
      }])
  }

  

  return(
    <>
    <button onClick={addTodo}>Add todo</button>
    {todos.map((todo) =>{
      return <Todo title={todo.title} description={todo.description}></Todo>
    })}
    </>
  )
}


// a todo component in which we pass title and desc and it return them in a format
function Todo({title , description}){
  return (
    <div>
        <h3>Title is :{title}</h3><br/>
        <h4>Desc is :{description}</h4>
    </div>
  )
}



export default App;