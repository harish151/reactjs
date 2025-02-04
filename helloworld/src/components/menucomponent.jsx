//rfce
import React from 'react'

function menucomponent({name}) {
    console.log("memu component")
  return (
    <div>
      {name}
    </div>
  )
}

export default React.memo(menucomponent)   //React.memo() is used to not re-render the functional components
