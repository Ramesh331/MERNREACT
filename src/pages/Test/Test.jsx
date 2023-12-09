import React, { useState } from 'react'


export const Test = () => {

    const [count,setCount] = useState(0)

    function increaseCount(){
        setCount(count + 1)
        console.log(count)
    }
    function decreaseCount(){
        setCount(count-1)
        console.log(count)
    }
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={increaseCount}> + </button>
        <button onClick={decreaseCount}> - </button>
    </div>
  )
}
