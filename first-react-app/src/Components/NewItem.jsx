import React from "react";

function NewItem(props){
    return (<div className="form">
            <input type="text" name="item" placeholder="New to-do item" onChange={props.onChange} value = {props.value}/>
            <button onClick={props.clicker}>
            <span>Add</span>
            </button>
            </div>
        )
}

export default NewItem;
