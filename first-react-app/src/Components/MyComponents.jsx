import React from "react"

function Heading(){
    return <h1>Heading from Components.jsx file</h1>;
}

export class List extends React.Component{
    render(){
        return (
            <ul>
                <li>The Kite Runner</li>
                <li>Wings of Fire</li>
                <li>Harry Potter</li>
            </ul>
        )
    }
}

function SecondList(){
    return <ul>
        <li>Deathly Hallows</li>
        <li>Half Blood Prince</li>
        <li>Order of Phoenix</li>
    </ul>;
}
export default Heading;
export {SecondList};
