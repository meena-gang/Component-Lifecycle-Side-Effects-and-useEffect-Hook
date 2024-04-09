import { useState, useEffect } from "react";

function Timer(){
    const[time, setTime] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
        console.log("this runs every sec");
        setTime(time+1);
        console.log(time);

    },1000);
    // clenup function
    return () => {
      clearInterval(timer);
    };
  },[time])
  return (
      <h1>{time}</h1>

  );
}

export default Timer;
