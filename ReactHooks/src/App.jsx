//memoisation
//useMemo
//recieving an input and giving an output and not computing  it again ->no need to reload the unchanged data 
import React, { useState, useEffect, useMemo } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [InputValue, setInputValue] = useState(1);

  let count = 0;
  // for(let i=0;i<=InputValue;i++){
  //   count += i;
  // }

  // problem with this is that the expensive operation rerenders even when there is no change 
  // so we can solve this by using useCallback or useMemo

  let coutn = useMemo(() => {
    //perform the expensive operation
    for (let i = 0; i <= InputValue; i++) {
      count += i;
    }

  }, [InputValue])
  return (
    <>
      <input onChange={function (e) {
        setInputValue(e.target.value);
      }} placeholder="Find sum from 1 to n" pattern="[0-9]*" ></input>
      <br />
      <p>Sum from 1 to n is {count}</p>
      <br />
      <button onClick={() => {
        setCounter(counter + 1);
      }}>Counter ({counter})</button>
    </>
  )
}

export default App;

//help is some some extra rerenders  which are not needed
//its not ggos to use two or useStare variables theat are dependednt in each other