import { useEffect, useState } from 'react'
import axios from 'axios'


// why useCustom hooks ---> to make your code more cleaner and

// n is the number of seconds after which we will hit the backend again 

function useTodos(n) {

  const [todos, setTodos] = useState([])
  const [loading,setLoading]=useState(true);

   
      useEffect(() => {
        const value = setInterval(() => {
          setLoading(true);
          console.log("hit");
          axios.get("https://sum-server.100xdevs.com/todos")
          .then(res => {
            setTodos(res.data.todos);
            setLoading(false);
          })
          
        }, n*1000);

        axios.get("https://sum-server.100xdevs.com/todos")
        .then(res => {
          setTodos(res.data.todos);
          setLoading(false);
        })

        // cleanup function to clear the clock and start the new clock when the n is changed
        return()=>{
          // cleanup function
          clearInterval(value);
          // function to clear interval 
          // assign value to setInteval and pass it here
        }
       
         
      }, [n])
// n is to be used as the dependency as it is used inside useffect

  return {todos,loading};
}

function CustomDataFetching() {
  const {todos,loading} = useTodos(5);  //using the custom hooks to fetch the data from the server

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