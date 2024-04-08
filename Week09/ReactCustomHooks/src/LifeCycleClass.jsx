import React from "react";

export default  class LifeCycleClass extends React.Component {
    componentDidMount() {
      // Perform setup or data fetching here

      console.log("component mounted");
    }
  
    componentWillUnmount() {
      // Clean up (e.g., remove event listeners or cancel subscriptions)
      console.log("compoent unmounted");
    }
  
    render() {
      // Render UI
      return (
      <div>
        hello from classs bades lifecycle event
      </div>
      )
    }
  }