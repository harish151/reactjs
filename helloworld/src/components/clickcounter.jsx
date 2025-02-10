//rce - to create class component
import React, { Component } from 'react'
import Updatedcomponent from './withcounter'
class clickcounter extends Component {
  render() {
    const { count,increment }=this.props
    return <button onClick={increment} >clicked {count}</button>
  }
}

export default Updatedcomponent(clickcounter)
