import React, { useEffect, useState } from 'react'

const UseEffect = () => {


  const [count,setCount] = useState(0)
  const [decreaseCount,setDecreaseCount] = useState(0)

  const increaseCount = ()=>{
    setCount(count + 1)
  }

  const handleDecrease = ()=>{
    setDecreaseCount(decreaseCount - 1)
  }

    //  useEffect (()=>{
    //     console.log("Welcome to site")
    // },[])

    // useEffect(()=>{
    //   if(count !== 0 ){
    //     document.title = count
    //     console.log("count Value changed")
    //   }
    // },[count,decreaseCount])

    useEffect(()=>{
      console.log("bye world")
    })


  return (
   <>
   <h1>{count}</h1>
    <button onClick={increaseCount}> + </button>
    <h1>{decreaseCount}</h1>
    <button onClick={handleDecrease}> - </button>
   </>

  )
}

export default UseEffect