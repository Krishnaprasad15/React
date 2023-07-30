// import React, { Component } from 'react'
//  class ConditionalRend extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//        isLoggedIn: false,
//        message:"Hello user"
//     }
//   }
//   change=()=>{
//     if(this.state.isLoggedIn){
//       this.setState({
//         isLoggedIn:false,
//         message:"Hello Krishna"
//       })
//     }else{
//       this.setState({
//         isLoggedIn:true,
//         message:"Hello user"
//       })
//     }
//   }
  
//   render() {
//     return(
//     <div>
//       <h1>{this.state.message}</h1>
//       <button onClick={this.change}>Click to login</button>
//       <button onClick={this.change}>Click to logout</button>
//     </div>
//     )
//   }
// }
// export default ConditionalRend



import React, { Component } from 'react'

export default class ConditionalRend extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn:true
    }
  }
  
  render() {
    // 1. IF_ELSE
    // if(this.state.isLoggedIn) return <h1>Hello Krishna</h1>
    // else return <h1>Hello user</h1>

    // 2. ELEMENT VARIABLE
    // let msg
    // if(this.state.isLoggedIn){
    //   msg=<h1>Hello krishna</h1>
    // }else msg=<h1>Hello User</h1>
    // return <div>{msg}</div>

    // 3. TERNARY OPERATOR
    // return (this.state.isLoggedIn)? <h1>Hello krishna</h1> : <h1>Hello user</h1>

    // 4. Short circuit operator
    return this.state.isLoggedIn && <h1>Hello krishna</h1>
  }
}

