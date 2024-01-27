let id = 1;

function addTodo(){
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const parent = document.getElementById("container");
    parent.appendChild(createChild(title,description, id++));
}

function createChild(title , description, id){
      //creating a div element
      const outerDiv = document.createElement("div");
      document.getElementById("container").appendChild(outerDiv);
      const  innerDiv1 = document.createElement("div") ;
      const  innerDiv2 = document.createElement("div") ;
      const  innerDiv3 = document.createElement("button") ;
      outerDiv.appendChild(innerDiv1);
      outerDiv.appendChild(innerDiv2);
      outerDiv.appendChild(innerDiv3);
      innerDiv1.innerHTML =` ${title}`;
      innerDiv2.innerHTML = `${description}`;
      innerDiv3.innerHTML = "Mark as done";
      innerDiv3.setAttribute("onclick" , `markAsDone(${id})`);
      outerDiv.setAttribute("id" , id);
      return  outerDiv;
}

function markAsDone(todoId){
    const parent = document.getElementById(todoId);
    parent.children[2].innerHTML = "Done"; 
}