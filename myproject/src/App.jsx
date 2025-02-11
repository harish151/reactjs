import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Postlist from './components/postlist'
import Postform from './components/postform'

function App() {
  const [count, setCount] = useState(0)

  return (
     <div className="App">
      {/*  <Postlist /> */}
      <Postform />
     </div> 
  );
}

export default App
