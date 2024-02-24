import React, { useContext } from 'react'
import { useState } from 'react'
import { CountContext } from './context';

const App = () => {
  const [count ,setCount]=useState(0);

  //wrap anyone that wants to use the teleported value inside a provider
  return (
    <div>
      <CountContext.Provider value={count}>
      <Count  setCount={setCount}/>
      </CountContext.Provider>
     
    </div>
  )
}

const Count  = ({setCount}) =>{
  return (
    <>
    <CountRenderer ></CountRenderer>
    <Buttons  setCount={setCount}/>
      
    </>
  )
}

const CountRenderer =() =>{
  const count=useContext(CountContext);
  return (
    <>
    {count}
    </>
  )
} 
const Buttons = ({setCount}) =>{
  const count=useContext(CountContext);
  return(
    <>
    <br/>
    <button onClick={()=>{setCount(count+1)}}>Increase</button>
    <br/>
    <button onClick={()=>{setCount(count-1)}}>Decrease</button>
    </>
  )

}

export default App
