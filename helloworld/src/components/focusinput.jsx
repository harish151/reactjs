import React, { Component } from 'react'
import Inputrefs from './inputrefs'
class focusinput extends Component {
  constructor(props) {
    super(props)
    this.componentref=React.createRef()
  }
  clickhandler=()=>{
    this.componentref.current.focusinput()
  }
  render() {
    return (
      <div>
        <Inputrefs ref={this.componentref} />
        <button onClick={this.clickhandler}>focus</button>
      </div>
    )
  }
}

export default focusinput
