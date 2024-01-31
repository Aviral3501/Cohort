import { useState } from "react";


export function CreateTodo(props){

    const [title , setTitle] = useState("");
    const [description , setDescription] = useState("");
    return <div>
        <input id="title" type="text" placeholder="title"></input><br/>
        <input id="desc" type="text" placeholder="description"></input><br/>
        <button onClick={()=>{
            fetch("http://localhost:3000/todos" , {
                method : "POST",
                body : JSON.stringify({
                    title : title,
                    description:description
                }),
                headers: {
                    "Content-Type":"application/json"
                }
            })
            .then(async function(res){
                const json = await res.json();
                alert("todo added");
            })
        }}>Add Todo</button>
    </div>
}