import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Heading from './MyComponents';
import {List} from './MyComponents';
import { SecondList } from './MyComponents';
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// var d  = new Date();
// console.log(d.getHours());
// let content;
// var customStyle ={color: ""};
 
// if(d.getHours()<=12)
//   { content = "Good Morning";
//     customStyle.color = "red";
//   }
// else if(d.getHours()<=18)
//   { content = "Good Afternoon";
//     customStyle.color = 'green';
//   }
  
// else
//   { content = "Good Evening";
//     customStyle.color = "blue";
//   }

// function Heading(){
//   return <h1>My Favourite Books</h1>
// }

ReactDOM.render(
  <div>
    <Heading/>
    <List/>
    <SecondList/>
  </div>
  
  ,document.getElementById("root")
); 