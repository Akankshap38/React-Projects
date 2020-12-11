import React from "react";


function App(){
  const [currentTime,setTime] = React.useState("TIME");

  function getCurrentTime(){
    setTime(new Date().toLocaleTimeString());
    console.log(new Date().toLocaleTimeString());
  }
  return (<div>
      <h1>{currentTime}</h1>
      <button onClick={getCurrentTime}>Get Time</button>
  </div>)
}

export default App;