import React, { Component } from "react";

class Bindevent extends Component{
  constructor(){
    super()
    this.state={
      message:'Click for surprise'
    }
  }
  handler=()=>{
    this.setState({
      message:'Happy Learning! you will acheive your goal one day'
    })
  }
  render(){
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.handler}>Click</button>
      </div>
    )
  }
}
export default Bindevent