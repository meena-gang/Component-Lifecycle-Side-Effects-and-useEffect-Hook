import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {
  const[count,setCount] = useState(0);

  function countHandler(){
    setCount(count+1)
  }
  return (
    <>
    <button onClick={countHandler}>Counter</button>
    <h1>{count}</h1>
    </>
  );
}

export default App;
