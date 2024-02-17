import React from 'react'
import  { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from './Components/Landing';
import Dashboard from './Components/Dashboard';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/"  element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
