import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App'


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
<App/>
  ,document.getElementById("root")
); 
