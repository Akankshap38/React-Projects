import React from "react";


function App(){
  const [currentTime,setTime] = React.useState("TIME");

  function getCurrentTime(){
    setTime(new Date().toLocaleTimeString());
  }
  setInterval(getCurrentTime,1000);
  return (<div>
      <h1>{currentTime}</h1>
      <button onClick={getCurrentTime}>Get Time</button>
  </div>)
}

export default App;