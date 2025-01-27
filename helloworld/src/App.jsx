//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Greet from './components/greet'
import Greet1 from './components/greet1'
import Hello from './components/hello'
import Message from './components/Message'
import Counter from './components/counter'
import Functionclick from './components/functionclick'
import Classclick from './components/classclick'
import Eventbind from './components/eventbind'
function App() {
  return (
   <div className="App">
        <Greet />
        <Greet1 name="abcd" city="xyz">
        </Greet1>
        <Hello name="abcd" city="xyz">
          <h1>This is Demo</h1>
        </Hello>
        <Message />
        <Counter />
        <Functionclick />
        <Classclick />
        <Eventbind />
   </div>
  );
}

export default App
