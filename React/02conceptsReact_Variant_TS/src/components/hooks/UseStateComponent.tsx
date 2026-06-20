import React, { useState } from "react";
interface UserProps {
    id?: number,
    name: string,
    age: number
}

type UserListProps = {
    usersList: UserProps[]
}
type Employee = {
    empName: string, empAge: number, empAddress?: string
}
function UseStateComponent({ usersList }: UserListProps) {


    const [sname, setSname] = useState<string>("Guvi")
    const [count, setCount] = useState<number>(0)
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [task, setTask] = useState<string[]>([])
    const [emp, setEmp] = useState<Employee>({ empName: "Emp01", empAge: 45 })
    // array of objects >>user
    const [profileDetails, setProfileDetails] = useState(usersList)
    
    const [proUser, setProUser] = useState<UserProps[]>([{
        id: 1,
        name: "abc",
        age: 34
    }])




    // object ,array ,array of objects
    const handle = () => {
        console.log(task);
        // setSname("Test123") // direct updation
        //update on a previous value
        // setSname((prev)=>prev+....)
        setCount((prev) => prev + 1)
        setIsOpen(!isOpen) // !false =true || !true=false
        console.log(isOpen);
        // spread operator
        setTask((prev) => [...prev, "Learn React", "Learn TS"])
        setEmp((prev) => ({ ...prev, empAge: 56, empAddress: "Chennai" }))
        console.log(profileDetails)
        setProUser((prev) => 
            ([ ...prev, { id:12, name: "Chennai", age: 45 }]))
}

return (
    <React.Fragment>
        <h2>{count}-{sname}-{isOpen}</h2>
        <h3>{task}</h3>
        <h4>{JSON.stringify(emp)}</h4>
        <h4>{JSON.stringify(proUser)}</h4>
        <button onClick={handle}>count</button>
    </React.Fragment>
)
}
export default UseStateComponent