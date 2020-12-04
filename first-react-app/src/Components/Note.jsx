import React from "react"

var customStyle = {
    borderRadius: "7px",
    boxShadow: "0 2px 5px #ccc",
    padding: "10px",
    width: "240px",
    margin: "16px",
    float: "left"
}
function Note(){
    return <div style={customStyle}>
        <h1>Title</h1>
        <p>Content of the div</p>
    </div>
}

export default Note;