import React from "react";

export default  class ClassBasedHook extends React.Component {
    constructor(props){
        super(props);
        this.state = { count : 0 };  // useState(0); equivalent
    }

        onClickHandler = () =>{
            this.setState( { count : this.state.count + 1}); // setCount(count+1);
        }

        render(){
            return (
                <div>
                    <p>{this.state.count}</p>
                    {/* {count} */}
                    <button onClick={this.onClickHandler}> Increement using class </button>
                </div>
            )
        }
}