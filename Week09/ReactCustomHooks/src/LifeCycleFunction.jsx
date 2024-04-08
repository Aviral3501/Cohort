import React, { useState } from 'react';
import { useEffect } from 'react';

const LifeCycleFunction = () => {

  const [count,setCount] = useState(0);

  // when dependency changes --> return runs first and then rest (above ) runs 
  // but initially --> rest wala runs , jab first time mount hota hai
  // return will run anytime the dependency changes , and then the rest will run
  useEffect(() => {
    // Perform setup or data fetching here
    console.log(`component mounted + ${count}`);

    return () => {
      // Cleanup code (similar to componentWillUnmount)
      console.log("compoent unmounted");
    };
  }, [count]);

  // Render UI
  return (
    <div>
      <p> From inside the function component</p>
      <button onClick={()=>(setCount(count+1))}>Button</button>
    </div>
  )
}

export default LifeCycleFunction
