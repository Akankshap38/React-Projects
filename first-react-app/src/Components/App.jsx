import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteArray, setNoteArray] = useState([]);

  function addNote(title,content){
    console.log("Note to be added!");
    if(title!==""&&content!=="")
    {
      setNoteArray(prevValue=>{
        return ([...prevValue,{
          title:title,
          content:content
        }])
      })
    }
    console.log(noteArray);
  }

  function deleteCard(id){
    console.log(id);
    setNoteArray(prevValue=>{
      return prevValue.filter((element,index)=>{      
        return index!==id;
      })
    })
    console.log(noteArray);
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      { noteArray.map((element,index) => {
          return <Note key={index} title={element.title} content={element.content} onDelete={deleteCard} id={index}/>
        })
      }
      <Footer />
    </div>
  );
}

export default App;
