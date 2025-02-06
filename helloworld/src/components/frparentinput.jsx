//rce
import React, { Component } from 'react'
import Forwardrefsinput from './forwardrefsinput'
class frparentinput extends Component {
    //rconst
    constructor(props) {
      super(props)
      this.inputref=React.createRef()
      
    }
    
clickhandler=()=>{
    this.inputref.current.focus()
}

  render() {
    return (
      <div>
        <Forwardrefsinput ref={this.inputref} />
        <button onClick={this.clickhandler}>click</button>
      </div>
    )
  }
}

export default frparentinput
