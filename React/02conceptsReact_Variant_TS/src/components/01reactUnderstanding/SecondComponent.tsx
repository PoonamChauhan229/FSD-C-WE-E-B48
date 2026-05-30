
import React from "react"
// destructuring concepts 
// props object >> object destructuring

// lname ,name,photo
type SecondProps = {
    lname: string,
    name: string,
    photo: string,
    age:number
}
// let lname:string =""

function SecondComponent({ lname, name, photo ,age}:SecondProps) {
    // const {lname,name,photo}=props // destructure over the fly
    console.log(lname, name, photo)
    return (
        <React.Fragment>
            {/* <h1>Second Component-{lname || "Guvi"}</h1> */}
            <div className='profile profile2'>
            <h2>Hello,{name} {lname}</h2>
            <img src={photo} alt="" height="150" width="150" />
            <h4>AGE-{age}</h4>
            </div>
        </React.Fragment>
    )



}
export default SecondComponent