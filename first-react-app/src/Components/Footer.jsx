import React from "react"


var customStyle = {
    color:"grey",
    fontWeight:"bolder",
    textAlign:"center",
    bottom:"0",
    position:"absolute",
    right:"0",
    left:"0",
    padding:"10px"
}
function Footer(){
    var year = new Date().getFullYear() 
    return <footer style={customStyle}>Copyright @ {year}</footer>
}

export default Footer;