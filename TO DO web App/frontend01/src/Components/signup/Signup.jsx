import React from 'react';
import "./signup.css";
import HeadingComp from './HeadingComp';

const Signup = () => {
  return (
    <div className='signup'>
        <div className="container">
            <div className="row">

            <div className='col-lg-4  col-left d-flex justify-content-center align-items-center column'>
                 <HeadingComp first="Sign" second="Up"/>
                </div>
                <div className="col-lg-8 column d-flex justify-content-center align-items-center">
                  <div className='d-flex flex-column w-75 p-5'>
                  <input className='p-2 my-3 input-signup' type="email" name="email" placeholder='Enter your email'></input>
                  <input className='p-2 my-3 input-signup' type="username" name="username" placeholder='Enter you username'></input>
                  <input className='p-2 my-3 input-signup' type="password" name="password" placeholder='Enter password'></input>
                  <button className='btn-signup p-2'>SignUp</button>
                  </div>
                 
                  
                </div>
               
            </div>

        </div>
      
    </div>
  )
}

export default Signup