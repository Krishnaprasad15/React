import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'',
         textarea:'',
         topic:'react'
      }
    }

    handler=(event)=>{
        this.setState({
            name: event.target.value,
        })
    }
    handler1=(event)=>{
      this.setState({
          textarea: event.target.value,
      })
    }
    handler2=(event)=>{
      this.setState({
          topic: event.target.value,
      })
    }
    submitHandler=(event)=>{
      alert(`${this.state.name} ${this.state.textarea} ${this.state.topic}`)
      event.preventDefault()
    }
    
  render() {
    return (
    <form onSubmit={this.submitHandler}>   
      <div>
        <label>Username</label>
        <input type="text" value={this.state.name} onChange={this.handler}/>
      </div>
      <div>
        <label>TextArea</label>
        <textarea value={this.state.textarea} onChange={this.handler1}></textarea>
      </div>
      <div>
        <label>Topic</label>
        <select value={this.state.topic} onChange={this.handler2}>
          <option value='react'>React</option>
          <option value='angular'>Angular</option>
          <option value='vue'>Vue</option>
        </select>
      </div>
      <button type='submit'>Submit</button>
    </form>
    )
  }
}
