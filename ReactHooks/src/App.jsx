import { useState } from "react";
import { useEffect } from "react";

function App(){

const [todos , setTodos] = useState([]);


//empty array means useEfeect will be called  only once when the component is mounted
  useEffect(()=>{
    setInterval(()=>{

      fetch("https://sum-server.100xdevs.com/todos")
      .then(async function(res){
        const json = await res.json();
        setTodos(json.todos);
      });
    },5000)
  },[]);


  return(
    <>
    {todos.map(todo => <Todo key={todo.id} id={todo.id} title={todo.title} description={todo.description}/>)}
    </>
  )



}

function Todo({id , title , description}){
  <>
  <h2>{title}</h2>
  <h4>{description}</h4>
  </>
}

export default App;