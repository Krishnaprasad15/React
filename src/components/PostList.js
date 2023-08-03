import React, { Component } from 'react'
import axios from 'axios'
export default class PostList extends Component {
    constructor(){
        super()
        this.state={
            posts:[],
            errorMsg:''
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response=>{
            this.setState({posts: response.data})
        }).catch(err=>{
            this.setState({errorMsg:'Error Retrieving data'})
        })
    }
  render() {
    const {posts,errorMsg}=this.state
    return (
      <div>
        <h1>LIST OF POSTS</h1>
        {
            posts.length? posts.map(post=> <div key={post.id}>{post.title}</div>):null
        }
        {
            errorMsg? <div>{errorMsg}</div>:null
        }
      </div>
    )
  }
}
