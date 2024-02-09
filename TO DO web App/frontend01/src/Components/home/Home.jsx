import React from 'react';
import "./home.css";

const Home = () => {
  return (
    <div className='home d-flex justify-content-center align-items-center'>
        <div className="container d-flex justify-content-center align-items-center flex-column">
            <h1 className='text-center'>Organsie your <br/>work and life.</h1>
            <p>Become focused and organised with our<br/> todo app.
                World's #1 task manager app.
            </p>
            <button className='home-btn p-2'>Make todo list</button>
        </div>
      
    </div>
  )
}

export default Home
