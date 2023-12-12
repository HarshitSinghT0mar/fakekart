import React, { useState } from 'react'
import './Counter.scss'

const Counter = () => {
const [count,setCount]=useState(1)

const increment=()=>setCount(prev=>prev+1)
const decrement=()=>setCount(prev=>prev<=0?0:prev-1)
  return (
    <div className='counter'>
    <button onClick={decrement}>-</button>
    <span>{count}</span>
    <button onClick={increment}>+</button>
    </div>
  )
}

export default Counter
