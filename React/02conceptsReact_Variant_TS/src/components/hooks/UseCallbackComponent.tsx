import { useCallback, useState } from "react"
import ChildCallBackComponent from "./ChildCallBackComponent"

// Parent 
const UseCallbackComponent=()=>{
    const [count,setCount]=useState(0)
    const [text,setText]=useState("")
    const [num,setNum]=useState(0)
    
    //return a function >> memoized function >> function recreate
    const cachedClickFn = useCallback(()=>{
        console.log("Btn clicked")
    }, [])// console the statement
        console.log("Parent Rendered")

    return(
      <>
      <h1>UseCallbackComponent={count}|{text}|||{num}|</h1>
      <button onClick={()=>setCount(count+1)}>Inc</button>

      <input type="text" value={text} 
      onChange={(e)=>{setText(e.target.value)}}
      />
      <button onClick={cachedClickFn}>Click CBK</button>

      <ChildCallBackComponent cachedClickFn={cachedClickFn}/>
      </>
    )
}
export default UseCallbackComponent