import React from 'react';
import "./signup.css";
import HeadingComp from './HeadingComp';
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const history = useNavigate();
  const [Inputs, setInputs] = useState({ email: "", username: "", password: "" });

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  }

  const submit = async (e) => {
    e.preventDefault();
    try {

      await axios.post("http://localhost:3000/api/v1/register", Inputs).then((response) => {
        if (response.data.message === "User Already Exists") {
          alert(response.data.message + " Please sign in (;");
          setInputs({ email: "", username: "", password: "" });
          history("/signin");
        } else {
          alert(response.data.message);//sign up successful
          setInputs({ email: "", username: "", password: "" });
          history("/signin");
        }
      })
    } catch (error) {
      console.error("Error during registration" + error);
      console.log("Internal Server Error , Sorry for inconvenience");

    }

  }
  return (
    <div className='signup'>
      <div className="container">
        <div className="row">
          <div className='col-lg-4  col-left d-flex justify-content-center align-items-center column'>
            <HeadingComp first="Sign" second="Up" />
          </div>
          <div className="col-lg-8 column d-flex justify-content-center align-items-center">

            <div className='d-flex flex-column w-75 p-5'>

              <input className='p-2 my-3 input-signup' type="email" name="email" placeholder='Enter your email' onChange={change} value={Inputs.email}></input>
              <input className='p-2 my-3 input-signup' type="username" name="username" placeholder='Enter you username' onChange={change} value={Inputs.username}></input>
              <input className='p-2 my-3 input-signup' type="password" name="password" placeholder='Enter password' onChange={change} value={Inputs.password}></input>
              <button className='btn-signup p-2' onClick={submit}>SignUp</button>


            </div>




          </div>

        </div>

      </div>

    </div>
  )
}

export default Signup
