import React, { Component } from 'react'

class hovercounter2 extends Component {
  render() {
    const {count,increment}=this.props
    return <h2 onMouseOver={increment}>hover {count} count</h2>
  }
}

export default hovercounter2
