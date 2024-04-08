import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import FunctionHook from './FunctionHook'
import ClassBasedHook from './ClassBasedHook'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FunctionHook/>
    <ClassBasedHook/>
    
  </React.StrictMode>,
)
