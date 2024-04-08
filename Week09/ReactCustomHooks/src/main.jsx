import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import FunctionHook from './FunctionHook'
import ClassBasedHook from './ClassBasedHook'
import LifeCycleFunction from './LifeCycleFunction'
import LifeCycleClass from './LifeCycleClass'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
 
    {/* <FunctionHook/>
    <ClassBasedHook/> */}

    <div>LIfeccyle here ----  </div>
    <LifeCycleFunction/>
    <LifeCycleClass/>

    </>
    
)
