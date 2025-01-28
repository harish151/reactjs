import React, { Component } from 'react'

class usergreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true                
      }
    }
    
  render() {
                                           // short circuit operator
    return this.state.isLoggedIn && <div>variable conditional rendering</div>


                                           // terenary conditional operator
    // return this.state.isLoggedIn?(
    //   <div>variable conditional rendering</div>):(
    //     <div>welcome guest</div>
    // )

                                           // variable conditional rendering*
    // let message
    // if(this.state.isLoggedIn){
    //     message=<div>variable conditional rendering</div>
    // } else{
    //   message=<div>welcome guest</div>
    // }
    // return (<div> {message} </div>)
  
                                           // if-else conditional rendering
    // if(this.state.isLoggedIn){ 
    //     return <div>Welcome react js</div>
    // } else{
    //     return <div>welcome guest</div>
    // }
  }
  }


export default usergreeting
