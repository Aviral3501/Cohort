import React from 'react'

const Update = () => {
  return (
    <div className='p-5  d-flex justify-content-center align-items-center flex-column update'>
        <h3>Update your task</h3>
        <input className="todo-inputs my-4 w-100 p-3" type='text' placeholder='New Title' ></input>
        <textarea className='todo-inputs w-100 p-3 ' placeholder='New Description'></textarea>
        <button className='btn btn-dark my-4'>UPDATE</button>
      
    </div>
  )
}

export default Update;
