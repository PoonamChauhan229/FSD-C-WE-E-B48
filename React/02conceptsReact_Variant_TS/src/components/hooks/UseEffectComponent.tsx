import axios from "axios"
import { useEffect, useState } from "react"

const UseEffectComponent = () => {
    type UserDataType = {
        userId: number,
        id: number,
        title: string,
        completed: boolean
    }
    const [count, setCount] = useState<number>(1)
    const [num, setNum] = useState<number>(10)
    const [users, setUsers] = useState<UserDataType>({
        userId: 1,
        id: 1,
        title: "test1234",
        completed: false
    })
     const [axiosusers, setAxiosUsers] = useState<UserDataType>({
        userId: 1,
        id: 1,
        title: "test1234",
        completed: false
    })
    const [sampleData,setSampleData]=useState<UserDataType[]>([{
        userId: 1,
        id: 1,
        title: "test1234",
        completed: false
    }]) // define the type & map the data to display the data in the browser
    const handle = () => {
        setCount((prev) => prev + 1)
        console.log("Counter is clicked")
    }
    const handleNum = () => {
        setNum((prev) => prev + 1)
        console.log("Number is clicked")
    }
    async function test3() {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/" + count) // readable stream
        const data = await res.json()
        console.log(data)
        setUsers(data)
    }

    async function test2() {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos") // readable stream
        const data = await res.json()
        console.log(data)
        setSampleData(data)
    }

    async function test1(){
        const res=await axios.get("https://jsonplaceholder.typicode.com/todos/10")
        console.log(res.data)
        setAxiosUsers(res.data)
    }
    // Initial Render+ Rendering will be after each change state
    useEffect(() => {
        console.log("without dependencies array-1")
    })
    // Initial Render
    useEffect(() => {
        console.log("with empty dependencies array-2")
        test2()
    }, [])

    // Initial Render + Dependant Array
    useEffect(() => {
        console.log("with dependencies array-3")
        test3()
        test1()
    }, [count])
    return (
        <>
            <h1>UseEffectComponent-{count}-{num}</h1>
            <button onClick={handle}>count</button>
            <button onClick={handleNum}>Num</button>
            <p>Check-{users.id}-{users.title}</p>
            <p>Axios-{axiosusers.id}-{axiosusers.title}</p>
            <p>Paragragh-{sampleData[0].id}-{sampleData[0].title}</p>
            {
                sampleData.map((element)=>(
                    <div key={element.id}>
                    <h3>{element.id}-{element.title}</h3>
                </div>
                ))
            }
        </>
    )
}
export default UseEffectComponent