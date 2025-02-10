import React, { Component } from 'react'
import Updatedcomponent from './withcounter'
class hoveroncount extends Component {                 //higher order components(hoc) topic
  render() {
    const { count,increment }=this.props
    return <h2 onMouseOver={increment}> Hover Counter{count}</h2>
  }
}

export default Updatedcomponent(hoveroncount)
