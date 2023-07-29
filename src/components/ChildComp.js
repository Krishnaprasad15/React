import React from 'react'

function ChildComp(props) {
  return (
    <div>
      <button onClick={props.greetHandler}>Click</button>
    </div>
  )
}

export default ChildComp