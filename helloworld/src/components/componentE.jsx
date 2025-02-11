//rce used to create class component
import React, { Component } from 'react';
import ComponentF from './componentF';

class ComponentE extends Component {
  render() {
    return <ComponentF />;
  }
}

export default ComponentE;
