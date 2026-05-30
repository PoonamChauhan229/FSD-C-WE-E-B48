// class components >>OOP  >> stateful
// functional components >>function >>stateless

import React from "react"
import SecondComponent from "./SecondComponent"

function FirstComponent(props) {
    // console.log(props) // objects
    // console.log(props.lname)
    return (
        <>
            {/* <h1>First Component-{props.lname ||"Guvi"}</h1> */}
            <div className='profile profile2'>
                <h2>Hello,{props.name} {props.lname || "Guvi"}</h2>
                <img src={props.photo} alt="" height="150" width="150" />
                <h4>AGE-{props.age}</h4>


                <SecondComponent lname="shinna" name="kiran" photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWEwY_wRGtyC8Rn2NzNyjaYeOGCEN8dk59og&s" age={35} />

                <SecondComponent lname="shinna" name="durga" photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWEwY_wRGtyC8Rn2NzNyjaYeOGCEN8dk59og&s" age={45} />


                <SecondComponent lname="shinna" name="poonam" photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWEwY_wRGtyC8Rn2NzNyjaYeOGCEN8dk59og&s" age={55} />

                <SecondComponent lname="shinna" name="suman" photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWEwY_wRGtyC8Rn2NzNyjaYeOGCEN8dk59og&s" age={65} />
            </div>
        </>
    )
}
export default FirstComponent

// export >> default ||named
// FirstComponent()