import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Timer from './Timer.js';
import Scroll from './Scroll.js';


function App() {
  const[flag, setFlag] = useState(true);
  return <div className='App'>
        {flag && <Timer />}
        <button onClick={() => setFlag(!flag)}>Toggle</button>
        {flag && <Scroll />}
        </div>
}

export default App;
