import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <div>
      <b>this here is the  navbar </b>
      <button onClick={()=>{navigate("/")}}>Landing</button>
      <button onClick={()=>{navigate("/dashboard")}}>Dashboard</button>
      
    </div>
  )
}

export default Navbar

