import React, { Component } from 'react'
import { UserConsumer } from './Context'


export default class ContextC extends Component {
  render() {
    return (
      <UserConsumer>
        {
            name=>{
                return <h1>Hello {name}</h1>
            }
        }
      </UserConsumer>
    )
  }
}
