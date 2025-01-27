import React, { Component } from 'react';

class Eventbind extends Component {
    //rconst
    constructor(props) {
      super(props)
    
      this.state = {
         message:'Hello'
      }
      this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler(){
        this.setState({
            message:'Good Bye'
        })
    }
    
  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        {/*  3 ways to bind */}
        {/*<button onClick={this.clickHandler.bind(this)}>click on</button> */}
        {/*<button onClick={()=>this.clickHandler()}>click on</button> */}   
        <button onClick={this.clickHandler}>click on</button>

      </div>
    )
  }
}

export default Eventbind
