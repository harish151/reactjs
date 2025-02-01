import React, { Component, PureComponent } from 'react'
import Regcomp from './message'
import PureComp from './purecomponent'
export class parent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:'abcd'
    }
  }
  componentDidMount(){
    setInterval(()=>{
        this.setState({
            name:'subscribed'
        })
    },2000)
  }
  render() {
    console.log("parent")
    return (
      <div>
        parent component
        <Regcomp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    )
  }
}

export default parent
