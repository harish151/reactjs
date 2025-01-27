import { Component } from "react";
class Greet1 extends Component {
    render(){
       // return <h1>Welcome {this.props.name} {this.props.city}</h1>
       //destructuring
       const {name,city}=this.props
       return <h1>Welcome {name} {city}</h1>
    }
}
export default Greet1;