import React from 'react';
const updatedcomponent=(OriginalComponent)=>{
    class NewComponent extends React.Component{
        constructor(props) {
            super(props)
          
            this.state = {
               count:0
            }
          }
          increment=()=>{
            this.setState(prevstate=>{
               return{ count:prevstate.count+1 }
            })
          }
        render(){
            return <OriginalComponent count={this.state.count} increment={this.increment} />
        }
    }
    return NewComponent;
};
export default updatedcomponent
