import { useEffect, useState } from 'react'
import axios from 'axios'


// why useCustom hooks ---> to make your code more cleaner and resusable

function useTodos() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos")
      .then(res => {
        setTodos(res.data.todos);
      })
  }, [])

  return todos;
}

function CustomDataFetching() {
  const todos = useTodos();  //using the custom hooks to fetch the data from the server

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