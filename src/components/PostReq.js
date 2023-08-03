import React, { Component } from 'react'
import axios from 'axios'
export default class PostReq extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userId:'',
         title:'',
         body:''
      }
    }
    handler=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    
    submitHandler=(e)=>{
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts').then(response=>{
            console.log(response)
        }).catch(err=>{
            console.log(err)
        })
    }
  render() {
    const {userId,title,body}=this.state
    return (
      <div>
        <form onSubmit={this.submitHandler}>
            <div>
                <input type='text' name='userId' value={userId} onChange={this.handler}></input>
            </div>
            <div>
                <input type='text' name='title' value={title} onChange={this.handler}></input>
            </div>
            <div>
                <input type='text' name='body' value={body} onChange={this.handler}></input>
            </div>
            <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}
