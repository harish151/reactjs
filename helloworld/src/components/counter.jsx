import { Component } from 'react'
//rce
class Counter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count:0
    }
  }
  increment(){
        this.setState({
            count:this.state.count+1
        })
  }

  render() {
    return (
      <div>
         Count:{this.state.count}
        <div>
            <button onClick={()=>this.increment()}>count</button>
        </div>
      </div>
    )
  }
}

export default Counter
