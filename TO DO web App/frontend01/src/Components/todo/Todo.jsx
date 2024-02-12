import React, { useState } from 'react';
import "./todo.css";
import TodoCards from './TodoCards';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Update from './Update';


const Todo = () => {

    const [ Inputs , setInputs] = useState({
        title:"",
        description:""
    })

    //to store the list of todos

    const [Array , setArray] = useState([]);

    //to show description only when the user clicks on the title
    const show = () =>{
        document.getElementById("textarea").setAttribute("style", "display:block");
    }
    
    //on add todo , add the input to the original todos
    const change = (e) =>{
        const {name,value}= e.target;
        setInputs({
            ...Inputs,
            [name]:value
        });

    }

    //rerendering on submitting the todo -> empty the inputs for the next input and add the current element to the array
    const submit = ()=>{
        if(Inputs.title === "" || Inputs.description===""){
            toast.error("Title or Description should not be empty");
        }else{
        setArray([...Array , Inputs]);
        setInputs({title:"", description:""});
        toast.success("Task is submitted");
        toast.error("Task is not saved, Please sign in");
        }
        
    }

    const del = (id) => {
        //only deleted a specific  card based on its id 
        console.log(id);
        Array.splice(id , "1");
        //update the array
        setArray([...Array]) ;
        toast.success("Task is deleted");
    }


  return (
    <>
    <br/>
    <div className="todo">
          <ToastContainer></ToastContainer>
      
        <div className="todo-main container d-flex justify-content-center align-items-center flex-column" >
            <div className='d-flex flex-column todo-inputs-div w-50 p-1 '>
                <input 
                        className="my-2 p-2 todo-inputs"
                        type="text" placeholder='TITLE'
                        name="title" onClick={show}
                        value={Inputs.title}
                        onChange={change} >

                </input>


                <textarea 
                        id="textarea" 
                        className="my-2 p-2 todo-inputs"
                        type="text" 
                        placeholder='DESCRIPTION'
                        name="description"
                        value={Inputs.description}
                        onChange={change}>

                </textarea>
               
            </div>
            <div className='w-50 my-3 d-flex justify-content-end'>
            <button className="home-btn px-2 py-1" onClick={submit}>Add</button>
            </div>
            
               
        </div>
        <div className="todo-body">
            <div className="container-fluid">
                <div className='row '>
                    {Array && Array.map((item , index) =>(
                        
                        <div className='col-lg-3  mx-5 my-2' key={index}>
                            <TodoCards title={item.title} description={item.description} id={index} delId={del}  />
                        </div> 
                        
                    ))}
                </div>
               
            </div>
        </div>
      

    </div>
    <div className="todo-update" id="todo-update">
        <div className='container'>
        <Update/>
        </div>
        
    </div>
    </>
  )
}

export default Todo;
