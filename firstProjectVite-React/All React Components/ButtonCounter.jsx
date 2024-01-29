import { useState } from 'react'

function App() {

  const [count , setCount] = useState(0);
  return (
    <>
        <div>
          <CustomButton count={count} setCount={setCount}></CustomButton>
        </div>
    </>
  )
}

//component button
function CustomButton(props){

    function onClickHandler(){
      props.setCount(props.count+1);
      // console.log(props.count);
    }

  return <button onClick={onClickHandler}>Count is {props.count}</button>
}


export default App
