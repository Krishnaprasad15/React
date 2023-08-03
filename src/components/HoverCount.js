import React, { Component } from 'react'
import HigherOrderComp from './HigherOrderComp'

 class HoverCount extends Component {
  render() {
    const {count,handler}=this.props
    return (
   
        <h1 onMouseOver={handler}>Hovered {count} times</h1>
    )
  }
}

export default HigherOrderComp(HoverCount)
// export default HoverCount