import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addname } from './inputslice'

const Input = () => {
    const [name,setName]=useState('')
    const dispatch=useDispatch()
    const handlesubmit=(e)=>{
        e.preventDefault()
        dispatch(addname(name))
        
 }
  return (
    <div>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        <button onClick={handlesubmit}>submit</button>

    </div>
  )
}

export default Input
