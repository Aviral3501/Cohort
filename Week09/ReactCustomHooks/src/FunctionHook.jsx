import React, { useState } from 'react'



const FunctionHook = () => {
  //counter 
  const [count , setCount] = useState(0);

  const onClickHandler = () =>{
    setCount(count+1);
  }
  return (
    <div>
      <p>{count}</p>
      <button onClick={onClickHandler}>Increement</button>
      
    </div>
  )
}

export default FunctionHook
