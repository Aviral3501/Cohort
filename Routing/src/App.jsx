import React from 'react';
import {RecoilRoot , useSetRecoilState ,useRecoilValue } from "recoil";
import { evenMessageSelector, countAtom } from './store/atoms/count';



let i=0;
const App = () => {

  //wrap anyone that wants to use the teleported value inside a provider
  return (
    <div>
     <RecoilRoot>
     <Count  />
     </RecoilRoot>
    </div>
  )
}

const Count  = () =>{

  return (
    <>
    <p>{++i}</p>
    <CountRenderer />
    <Buttons/>
      
    </>
  )
}

const CountRenderer = () => {
  const count=useRecoilValue(countAtom);
  return (
    <>
      <b>
        {count}
      </b>
      
    </>
  )
}

const MessageComponent = () => {
  const evenMessage = useRecoilValue(evenMessageSelector);

  return (
    <div>
      <p>{evenMessage}</p>
    </div>
  );
};

const Buttons = () =>{
  const setCount = useSetRecoilState(countAtom);
  return(
    <>
    <br/>
    <button onClick={()=>{setCount(count=>count+1)}}>Increase</button>
    <br/>
    <button onClick={()=>{setCount(count=>count-2)}}>Decrease</button>
    <MessageComponent/>
    </>
  )

}

export default App
