//rce
import React, { Component } from 'react'

class refs extends Component {
  constructor(props) {
    super(props)
    this.inputRef=React.createRef()        //first approach  - createRef
    this.cbRef=null
    this.setcbRef=(element) =>{            //second approach - callback
      this.cbRef=element
    }
  }
  
  componentDidMount(){
    if(this.cbRef){
      this.cbRef.focus()
    }
    // this.inputRef.current.focus()
    // console.log(this.inputRef)
  }
  clickhandler=()=>{                         //refs is used to fetch data and focus the input
    alert(this.inputRef.current.value)
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} /> 
        <input type="text" name="" id="" ref={this.setcbRef} />         
        <button onClick={this.clickhandler}>click</button>
      </div>
    )
  }
}

export default refs
