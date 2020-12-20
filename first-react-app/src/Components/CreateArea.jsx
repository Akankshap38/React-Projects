import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';

function CreateArea(props) {
  const [newData,setNewData] = useState({
    title:"",
    content:""
  });

  function updateData(event){
    event.preventDefault();
     const name = event.target.name;
     const value = event.target.value;
     console.log(value+"..........");
     setNewData(preValue=>{
        return { ...preValue,
        [name] : value
        };
     })

  }

  return (
    <div>
      <form>
        <input onChange={updateData} name="title" placeholder="Title" value={newData.title}/>
        <textarea onChange={updateData} name="content" placeholder="Take a note..." rows="3" value={newData.content}/>
        <button onClick={(e)=>{
          e.preventDefault();
          props.onAdd(newData.title,newData.content);
          setNewData({
            title : "",
            content : ""
         })
        }}>
          <AddIcon />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;