import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Event from './Event';

function App() {
  const[users, setUsers] = useState([]);
 useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    setUsers(data);
  })
  
  },[]);
 

  return (
    <>
    <div>
       {users.map((el) => <div key={el.id} style={{border:"1px solid black",margin:"10px",backgroundColor:"blue",color:"white",paddingLeft:"10px"}}>
            <p>name : {el.name}</p>
            <p>username : {el.username}</p>
            <p>email : {el.email}</p>
            <p>phone : {el.phone}</p>
       </div>)}
    </div>
    <Event />
    </>
  );
}

export default App;
