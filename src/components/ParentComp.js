import React, { Component } from 'react'
import ChildComp from './ChildComp'
class ParentComp extends Component {
    constructor(){
        super()
        this.state={
            parentName:"Parent"
        }
    }
    greetPar=()=>{
        alert(`Hello ${this.state.parentName}`)
    }
  render() {
    return (
      <div>
        <ChildComp greetHandler={this.greetPar}/>
      </div>
    )
  }
}

export default ParentComp
