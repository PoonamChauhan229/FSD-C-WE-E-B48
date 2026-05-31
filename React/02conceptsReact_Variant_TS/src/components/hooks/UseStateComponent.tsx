import React, { useState } from "react";
function UseStateComponent() {
    const [sname, setSname] = useState<string>("Guvi")
    const [count, setCount] = useState<number>(0)
    const [isOpen, setIsOpen] = useState<boolean>(false)

    // object ,array ,array of objects
    const handle = () => {
        console.log(count);
        // setSname("Test123") // direct updation
        //update on a previous value
        // setSname((prev)=>prev+....)
        setCount((prev) => prev + 1)
        setIsOpen(!isOpen) // !false =true || !true=false
        console.log(isOpen);
    }

    return (
        <React.Fragment>
            <h2>{count}-{sname}-{isOpen}</h2>
            <button onClick={handle}>count</button>
        </React.Fragment>
    )
}
export default UseStateComponent