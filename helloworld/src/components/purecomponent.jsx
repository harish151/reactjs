//rpce
import React, { PureComponent } from 'react'
class purecomponent extends PureComponent {
  render() {
    console.log("pure component")  //pure components are not re-rendering
    return (
      <div>
        <h1>pure component</h1>
        pure component{this.props.name}
      </div>
    )
  }
}

export default purecomponent
