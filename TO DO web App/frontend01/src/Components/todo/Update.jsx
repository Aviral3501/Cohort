import React from 'react'

const Update = ({display}) => {
  return (
    <div className='p-5  d-flex justify-content-center align-items-center flex-column update'>
        <h3>Update your task</h3>
        <input className="todo-inputs my-4 w-100 p-3" type='text' placeholder='New Title' ></input>
        <textarea className='todo-inputs w-100 p-3 ' placeholder='New Description'></textarea>
        <div className='w-100  d-flex justify-content-start'>
                <button className='btn btn-dark my-4'>UPDATE</button>
                <button className='btn btn-danger my-4 mx-3' onClick={()=>{display("none")}}>Close</button>
        </div>
        

      
    </div>
  )
}

export default Update;
