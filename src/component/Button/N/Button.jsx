import React from 'react'

export const Button = (props) => {
    const {title} = props ;

  return (
    
    <button style={{height:"50px",width:"100px"}}>{title}</button>
  )
}


export default Button 