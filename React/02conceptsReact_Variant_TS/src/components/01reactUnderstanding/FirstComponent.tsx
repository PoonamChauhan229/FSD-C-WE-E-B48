// class components >>OOP  >> stateful
// functional components >>function >>stateless

import React from "react"

function FirstComponent(props){
    console.log(props) // objects
    console.log(props.lname)
    return(
        <React.Fragment>
            <h1>First Component-{props.lname ||"Guvi"}</h1>
            <h2>Hello World!-{props.name}</h2>
           <img src={props.photo} alt="" height="150" width="150"/>
        </React.Fragment>
    )
}
export default FirstComponent

// export >> default ||named 
// FirstComponent()