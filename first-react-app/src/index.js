import React from 'react';
import ReactDOM from 'react-dom';
import {mapNumbers,filteredNums,accumulator,search,position} from './jsPractice'

console.log({mapNumbers});
console.log({filteredNums});
console.log({accumulator});
console.log({search});
console.log({position});

function Card(props){
  var imgStyle = {
    width:"300px",
    height:"300px"
  }
  return <div>
      <h2>{props.name}</h2>
      <img style={imgStyle} src={props.src} alt={props.description}/>
      <p>{props.telephone}</p>
      <p>{props.email}</p>
    </div>
}

// if multiple data needs to be printed
// the array of Card Dard is stored in CardData.js file. It is imported and createCard function is called repetedly
// inorder to arrange each element's and print in the same format.
// import Data from '/Components/cardData'

// function createCard(cardData){
//   var imgStyle = {
//     width:"100px",
//     height:"100px"
//   }
//   return <div>
//   <h2>{cardData.name}</h2>
//   <img style={imgStyle} src={cardData.src} alt={cardData.description}/>
//   <p>{cardData.telephone}</p>
//   <p>{cardData.email}</p>
// </div>
// }

ReactDOM.render(
  <div>
    <Card name="Akanksha Pardeshi" src="https://images.unsplash.com/photo-1520828399171-5c4e25963afc?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" description="Akanksha's DP" telephone="+123456789" email="akankshapardeshi03@gmail.com"/>
    {/* Data.map(createCard) // function used to interate over every element of array*/}
  </div>
  ,document.getElementById("root")
); 
