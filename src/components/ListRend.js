import React from 'react'

export default function ListRend() {
    const names=['krishna','Prasad','Kittu','Kittu']
//   return (
//     <div>
//       {
//         names.map(person=> <h1>{person}</h1>)
//       }
//     </div>
    // )
    const person= names.map((name,index)=><h1 key={index}>{index} {name}</h1>)
    return <div>{person}</div>
}
