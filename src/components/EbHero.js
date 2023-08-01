import React from 'react'

export default function EbHero({heroName}) {
    if(heroName==="joker"){
        throw new Error('Not a Hero');
    }
  return (
    <div>
      <h1>{heroName}</h1>
    </div>
  )
}
