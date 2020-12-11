import React, {useState} from "react";


function App(){
  const [fullName, setFullName] = useState({
    fname : "",
    lname : ""
  });

  function updateHeading(event){
    console.log(event.target.name);
    setFullName(prevValue =>{
    if(event.target.name==="fName")
      {
         return {
           fname:event.target.value,
           lname:prevValue.lname
         }
      }
    else if(event.target.name==="lName")
    {
      return {
        fname:prevValue.fname,
        lname:event.target.value
      }
    }
    console.log(fullName);
  });

}

  return (
    <div className="container">
      <h1>Hello {fullName.fname} {fullName.lname}</h1>
      <form>
        <input name="fName" placeholder="First Name" onChange={updateHeading}/>
        <input name="lName" placeholder="Last Name" onChange={updateHeading}/>
        <button>Submit</button>
      </form>
    </div>
  );

}

export default App;