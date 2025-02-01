import React, { Component } from 'react'

class unmounting extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        showChild: true,
    }
  }
  handleDelete = () => {
    this.setState({ showChild: false });
  };
  render() {
    const { showChild } = this.state;
    return (
      <div>
       {showChild && <Child />}
        <button type="button" onClick={this.handleDelete}>
          Delete Header
        </button>
      </div>
    )
  }
}
class Child extends Component {
    componentWillUnmount() {
      alert('The component named Child is about to be unmounted.');
    }
  
    render() {
      return <h1>Hello World!</h1>;
    }
  }
export default unmounting
