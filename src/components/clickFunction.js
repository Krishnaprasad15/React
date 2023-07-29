import React from 'react'

const clickFunction=()=> {
    const clickHandler= ()=>{
        console.log("Button clicked")
    }
  return (
    <div>
      <h1>Click the button</h1>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}
export default clickFunction
