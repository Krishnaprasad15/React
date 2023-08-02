import React, { Component } from 'react'
import HigherOrderComp from './HigherOrderComp'

 class HoverCount extends Component {
  render() {
    // const [count,handler]=this.props
    return (
   
        <h1 onMouseOver={this.props.handler}>Hovered {this.props.count} times</h1>
    )
  }
}

export default HigherOrderComp(HoverCount)
// export default HoverCount