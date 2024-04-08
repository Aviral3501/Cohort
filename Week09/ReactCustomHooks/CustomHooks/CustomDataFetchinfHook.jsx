import { useEffect, useState } from 'react'
import axios from 'axios'


// why useCustom hooks ---> to make your code more cleaner and

function useTodos() {

  const [todos, setTodos] = useState([])
  const [loading,setLoading]=useState(true);

  useEffect(() => {
    // setLoading(true);
    axios.get("https://sum-server.100xdevs.com/todos")
      .then(res => {
        setTodos(res.data.todos);
        setLoading(false);
      })
     
  }, [])

 

  return {todos,loading};
}

function CustomDataFetching() {
  const {todos,loading} = useTodos();  //using the custom hooks to fetch the data from the server

  if(loading){
    return(
      <div>loading...</div>
    )
  }

  return (
    <>
      {todos.map(todo => <Track key={todo.title+Math.random()} todo={todo} />)}
    </>
  )
}

function Track({ todo }) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

export default CustomDataFetching;