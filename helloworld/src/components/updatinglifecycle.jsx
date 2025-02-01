import React, { Component } from 'react'

class updatinglifecycle extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        favoriteFood: 'rice'
    }
  }
  static getDerivedStateFromProps(props,state){                    //method1-getDerivedstatefromprops()=>The method should return an object that represents the updated state of the component, or null if no state update is necessary.
            console.log(state)
            console.log("lifecycle getDerivedstatefromprops")
            return null;
  }
  shouldComponentUpdate(nextProps, nextState) {                    //method2
    // Only re-render if the favoriteFood state has changed
    console.log("should component update")
    return this.state.favoriteFood !== nextState.favoriteFood;
  }
  changeFood = () => {
    this.setState({ favoriteFood: 'pizza' });
  }
  getSnapshotBeforeUpdate(prevprops,prevstate){                   //method3
        console.log(prevstate)
        console.log('Get Snapshot Before Update')
        return null
  }
  componentDidUpdate(){                                           //method4
    console.log("component did update")
  }
  render() {                                                      //method5
    return (
      <div>
           <h1>{this.state.favoriteFood}</h1>
           <button type="button" onClick={this.changeFood}>Change food</button>
      </div>
    )
  }
}

export default updatinglifecycle
