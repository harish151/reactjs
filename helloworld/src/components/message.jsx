import {Component} from "react";
class Message extends Component {
    constructor(){
        super()
        this.state={
            Message:'welcome visitor'
        }
    }
    changeMessage(){
        this.setState(
        {
            Message:'thanks for subscribe'
        })
    }
    render(){
        console.log("message")
        return(
            <div>
                Regular Component{this.props.name}
                {/*<h1>
                    {this.state.Message}
                </h1>
                <button onClick={()=>this.changeMessage()}>subscribe</button> */}
            </div>
        );
    }
}
export default Message