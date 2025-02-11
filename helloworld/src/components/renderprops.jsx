import React, { Component } from 'react'

class renderprops extends Component {
  render() {
    return (
      <div>
        {this.props.render(true)}
      </div>
    )
  }
}

export default renderprops
