import React from "react"

var customStyle = {
    color:"white",
    backgroundColor:"yellow",
    fontSize:"50px",
    fontWeight:"bolder",
    paddingLeft:"4%",
    paddingBottom:"10px"
}
function Header(){
    return <header style={customStyle}>Keeper</header>
}

export default Header;