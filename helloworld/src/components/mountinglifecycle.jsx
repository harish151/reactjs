//mounting lifecycle
import React, { Component } from 'react'

class mountinglifecycle extends Component {
    //rconst
    constructor(props) {       //method1-constructor()
    super(props)
    this.state = {
        name:'Mounting Lifecycle'
    }
    }

    static getDerivedStateFromProps(props,state){              //method2-getDerivedstatefromprops()=>The method should return an object that represents the updated state of the component, or null if no state update is necessary.
        console.log("lifecycle getDerivedstatefromprops")
        return null
    }

    componentDidMount(){                      //method3-componentDidMount()=>The componentDidMount() method is also defined, which is called when the component is mounted in the DOM. In this method, there's a setTimeout() function that updates the state of favoritefood to "pizza" after 1 second
        console.log("lifecycle componentDidMount")
    }
  render() { 
    console.log("lifecycle render")                     //method4-render()=>read props and state and return jsx
    return (
      <div>
        <h2>{this.state.name}</h2>
      </div>
    )
  }
}

export default mountinglifecycle
