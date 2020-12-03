import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// const name = "Akanksha Pardeshi";

// ReactDOM.render(
// <div className="heading">
//   <h1 style={{ color:"red"}}>Hello, World!</h1>
//   <p>Hello {name}</p>
// </div>
// ,document.getElementById('root'))
// var h1 = document.createElement("h1");
// h1.innerHTML = "<h1>Hello, World! (method2)</h1>";
// document.getElementById('root').append(h1);

var d  = new Date();
console.log(d.getHours());
let content;
var customStyle ={color: ""};
 
if(d.getHours()<=12)
  { content = "Good Morning";
    customStyle.color = "red";
  }
else if(d.getHours()<=18)
  { content = "Good Afternoon";
    customStyle.color = 'green';
  }
  
else
  { content = "Good Evening";
    customStyle.color = "blue";
  }

ReactDOM.render(
  <h1 style={customStyle}>{content}</h1>
  ,document.getElementById("root")
); 