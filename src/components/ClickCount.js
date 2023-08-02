import React, { Component } from 'react'
import HigherOrderComp from './HigherOrderComp'

 class ClickCount extends Component {
  render() {
    // const [count,handler]=this.props
    return (
        <button onClick={this.props.handler}>Clicked {this.props.count} times</button>
    )
  }
}
export default HigherOrderComp(ClickCount)