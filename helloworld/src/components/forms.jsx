import  { Component } from 'react'
const form={
    border:'1px solid white',
    width:'100%'
}
class forms extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:"",
         comments:"",
         topic:"react"
      }
    }
    handlerusername=(Event)=>{
        this.setState({
            username:Event.target.value
        });
    }
    handlercomments=(Event)=>{
        this.setState({
            comments:Event.target.value
        });
    }
    handleroptions=(Event)=>{
        this.setState({
            topic:Event.target.value
        });
    }
    handlersubmit=()=>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
    }
  render() {
    return (
        <form onSubmit={this.handlersubmit}>
      <div style={form}>
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" value={this.state.username} onChange={this.handlerusername}/>
      </div>
      <div>
        <label htmlFor="textarea">Comments</label>
        <textarea name="textarea" id="" value={this.state.comments} onChange={this.handlercomments}></textarea>
      </div>
      <div>
        <label htmlFor="subjects"></label>
        <select name="subjects" id="" value={this.state.topic} onChange={this.handleroptions}>
            <option value="react">React JS</option>
            <option value="angular">Angular JS</option>
            <option value="node">Node JS</option>
            <option value="express">Express JS</option>
        </select>
      </div>
      <button type='submit' >submit</button>
      </form>
    )
  }
}

export default forms
