import React from 'react'

const ErrorMessage = (props) => {
  return ( <div className={props.className}>
    <h3>{props.children}</h3>
  </div>
    
  )
}

export default ErrorMessage
