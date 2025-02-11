//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'

import Greet from './components/greet'
import Greet1 from './components/greet1'
import Hello from './components/hello'
import Message from './components/Message'
import Counter from './components/counter'
import Functionclick from './components/functionclick'
import Classclick from './components/classclick'
import Eventbind from './components/eventbind'
import Usergreeting from './components/conditionrender'
import List from './components/list'
import Stylesheet from './components/stylesheet'
import Inline from './components/inline'
import './App.css'
import './index.css'
import Form from './components/forms'
import MountLifecycle from './components/mountinglifecycle'
import Updatinglifecycle from './components/updatinglifecycle'
import Unmounting from './components/unmounting'
import Fragments from './components/fragments'
import Purecomponent from './components/purecomponent'
import Parent from './components/parent'
import Refs from './components/refs'
import Focusinput from './components/focusinput'
import Frparentinput from './components/frparentinput'
import Portaldemo from './components/portaldemo'
import Clickcounter from './components/clickcounter'
import Hoveroncount from './components/hoveroncount'
import Clickcounter2 from './components/clickcounter2'
import Hovercounter2 from './components/hovercounter2'
import Renderprops from './components/renderprops'
import Counter1 from './components/counter1'
import { Userprovider } from './components/context'; 
import ComponentC from './components/componentC';
function App() {
  return (

 <div className="App">
      
   {/* <h1 className='error'>Error</h1>
    <h1 className='success'>Success</h1>
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
        <Usergreeting />
        <List />
        <Stylesheet primary={true}/>
        <Inline /> 
        <Form />  
        <MountLifecycle /> 
        <Updatinglifecycle /> 
        <Unmounting /> 
        <Fragments /> 
        <Parent /> 
        <Refs /> 
        <Focusinput /> 
        <Frparentinput /> 
        <Portaldemo /> 
        <Clickcounter /> 
        <Hoveroncount /> 
        <Clickcounter2 /> 
        <Hovercounter2 />
        <Renderprops render={(isloggedin)=>isloggedin?"pylife":"guest"}/> 
        <Counter1 render={(count,increment)=>(<Clickcounter2 count={count} increment={increment}/>)}/>
        <Counter1 render={(count,increment)=>(<Hovercounter2 count={count} increment={increment}/>)}/> */}
        <Userprovider value="John Doe"> 
            <ComponentC />
        </Userprovider>
   </div> 
  );
}

export default App
