import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {add, divide, multiply, subtract} from './Components/calculate';


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


ReactDOM.render(
  <div>
    <li>{add(1,2)}</li>
    <li>{subtract(2,3)}</li>
    <li>{multiply(7,3)}</li>
    <li>{divide(10,3)}</li>
  </div>
  
  ,document.getElementById("root")
); 