import React, { Component } from 'react'

class clickClass extends Component {
    clickHandle=()=>{
        console.log("clicked")
    }
  render() {
    return (
      <div>
        <h1>Click me</h1>
        <button onClick={this.clickHandle}>click</button>
      </div>
    )
  }
}

export default clickClass
