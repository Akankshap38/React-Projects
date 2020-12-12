import React, {useState} from "react";


function App(){
  const [fullName, setFullName] = useState({
    fname : "",
    lname : ""
  });

  function updateHeading(event){
    console.log(event.target.name);
    const {name,value} = event.target;

    setFullName(prevValue =>{
      return {
        ...prevValue,
        [name]:value
      }
  });

}

  return (
    <div className="container">
      <h1>Hello {fullName.fname} {fullName.lname}</h1>
      <form>
        <input name="fname" placeholder="First Name" onChange={updateHeading} value={fullName.fname}/>
        <input name="lname" placeholder="Last Name" onChange={updateHeading} value={fullName.lname}/>
        <button>Submit</button>
      </form>
    </div>
  );

}

export default App;