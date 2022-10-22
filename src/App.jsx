import { useState } from 'react';
import '/src/Css/App.css';
import NavBar from './components/NavBar'
import WatertherPanel from './components/WatertherPanel';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar/>
      <WatertherPanel/>
      
    </div>
  )
}

export default App
