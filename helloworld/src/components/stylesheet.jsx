//rfce
import React from 'react'
import "./mystyles.css"
function stylesheet(props) {
    let classname=props.primary ?'primary':''
  return (
    <div>
      <h1 className={`${classname} font-xl` } id='primary'>Stylesheet</h1>
    </div>
  )
}

export default stylesheet


