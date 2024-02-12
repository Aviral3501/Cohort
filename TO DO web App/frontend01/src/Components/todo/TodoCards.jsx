import React from "react";
import { MdDelete } from "react-icons/md";
import { MdOutlineRefresh } from "react-icons/md";


const TodoCards = ({ title, description, id  , delId}) => {
    const truncatedDescription =
        description.length > 150
            ? `${description.substring(0, description.lastIndexOf(" ", 150))}...`
            : description;

    const truncatedTitle =
        title.length > 60 ? `${title.substring(0, 60)}...` : title;
    return (
        <div className="p-3 todo-card">
            <div>
                <h5
                    style={{
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 2, // Adjust the number of lines you want to display
                    }}
                >
                    {truncatedTitle}
                </h5>
                {/* Display the first 150 characters of description with ellipsis if needed */}
                <p
                    className="todo-card-p"
                    style={{
                        minHeight: "60px",
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 3, // Adjust the number of lines you want to display
                    }}
                >
                    {truncatedDescription}
                </p>
            </div>

            <div className="d-flex justify-content-between">

                <div onClick={()=>{
                   document.getElementById("todo-update").setAttribute('style' , "display:block");
                }}>
                    < MdOutlineRefresh className="card-icon"/>

                </div>

                <div onClick={() => {
                    delId(id);
                    }}>
                    <MdDelete className="card-icon del"/>

                </div>


            </div>
        </div>
    );
};
export default TodoCards;
