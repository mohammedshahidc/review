import React from 'react'
import { useSelector } from 'react-redux'

const Display = () => {
    const name=useSelector((state)=>state.str.value)
    console.log(name);
  return (
    <div>
       <li>{name}</li> 
      
    </div>
  )
}

export default Display
