//rce-create class component
import React, { Component } from 'react'

class clickcounter2 extends Component {
  render() {
    const {count,increment}=this.props
    return ( <button onClick={increment}>clicked {count} times</button> )
  }
}

export default clickcounter2
