import React from "react"
/*const Hello=(props)=>{
     return (
         <div id="hello">
             <h1>hello {props.name} {props.city}</h1>
             {props.children}
         </div>
     );
    //return React.createElement('div',{id:'hello',class:'dummy'},React.createElement('h1',null,'Reactjs'))
} */

//destructuring props & state
const Hello=({name,city})=>{
    return (
        <div id="hello">
            <h1>hello {name} {city}</h1>
        </div>
    );
}
export default Hello