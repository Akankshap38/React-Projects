import React from "react"

var customStyle = {
    borderRadius: "7px",
    boxShadow: "0 2px 5px #ccc",
    padding: "10px",
    width: "240px",
    margin: "16px",
    float: "left"
}
function Note(props){
    return <div style={customStyle}>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
    </div>
}

export default Note;