import { Component } from "react";
class Great1 extends Component {
    render(){
        return <h1>Welcome {this.props.name} {this.props.city}</h1>
    }
}
export default Great1;