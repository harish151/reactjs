//rce-create class component
import React, { Component } from 'react';
import { Userconsumer } from './context'; // Import Userconsumer from context

class ComponentF extends Component {
  render() {
    return (
      <Userconsumer>
        {(username) => {
          return <div>Hello {username}</div>;  // Display the username
        }}
      </Userconsumer>
    );
  }
}

export default ComponentF;

