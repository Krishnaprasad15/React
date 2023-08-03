import React, { Component } from 'react'
import HigherOrderComp from './HigherOrderComp'

 class ClickCount extends Component {
  render() {
    const {count,handler}=this.props
    return (
        <button onClick={handler}>Clicked {count} times</button>
    )
  }
}
export default HigherOrderComp(ClickCount)