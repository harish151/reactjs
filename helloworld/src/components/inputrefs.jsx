import React, { Component } from 'react'

class inputrefs extends Component {
    constructor(props) {
      super(props)
      this.inputRef=React.createRef()
    }
    
    focusinput(){
        this.inputRef.current.focus()
    }

  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef} />
      </div>
    )
  }
}

export default inputrefs
