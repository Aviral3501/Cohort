import React from 'react'
import "./signup.css";
import HeadingComp from './HeadingComp';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { authActions } from "../../store";
import { useDispatch } from 'react-redux';


const Signin = () => {

  const dispatch = useDispatch();
  
  const history = useNavigate();
  const [Inputs, setInputs] = useState({ email: "", password: "" });

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  }

  const submit = async (e) => {
    e.preventDefault();
    try {

      await axios.post("http://localhost:3000/api/v1/signin", Inputs).then((response) => {

      //if user exists
      if(response.data.message==="Please Sign Up first "){
        alert("Sign up first");
        history("/signup");
      }else if(response.data.message ==="Invalid email or password"){
        alert("Wrong email or password")
      }else{
        console.log("signed in");
        // console.log(response.data.userData); 
        // console.log(response.data.userData._id);
        // storing the _id in session storage
        sessionStorage.setItem("id", response.data.userData._id);
        dispatch(authActions.login());
        
        history("/todo");
      }
        
      });
    } catch (error) {
      console.error("Error during signin , Internal Server error" + error);

    }

  }

  return (
    <div className='signup'>
    <div className="container">
        <div className="row">
        <div className='col-lg-4  col-left d-flex justify-content-center align-items-center column'>
             <HeadingComp first="Sign" second="In"/>
            </div>
            <div className="col-lg-8 column d-flex justify-content-center align-items-center">
              
              <div className='d-flex flex-column w-75 p-5 input-data-small'>
              <input className='p-2 my-3 input-signup' type="email" name="email" placeholder='Enter your email' value={Inputs.email} onChange={change}></input>
              {/* <input className='p-2 my-3 input-signup' type="username" name="username" placeholder='Enter you username'></input> */}
              <input className='p-2 my-3 input-signup' type="password" name="password" placeholder='Enter password' value={Inputs.password} onChange={change}></input>
              <button className='btn-signup p-2' onClick={submit}>SignIn</button>
              </div>
              
              
             
              
            </div>
           
        </div>

    </div>
  
</div>
  )
}

export default Signin
