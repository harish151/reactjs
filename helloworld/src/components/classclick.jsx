import React, { Component } from 'react'

class Classclick extends Component {
  clickHandler(){
    console.log("clicked")
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>click me</button>
      </div>
    )
  }
}

export default Classclick
