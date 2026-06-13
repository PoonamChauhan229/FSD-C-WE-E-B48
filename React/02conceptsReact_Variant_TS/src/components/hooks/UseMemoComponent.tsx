import { useMemo, useState } from "react"

const UseMemoComponent=()=>{
    const [count,setCount]=useState(0)
    const [text,setText]=useState("")
    // const cachedValue = useMemo(calculateValue, dependencies)
    const cachedDoubleCount=useMemo(()=>{
        console.log("Calculate",count) //0
        return count*2
    },[count]) // initial render 
    return(
      <>
      <h1>UseMemoComponent={count}|{text}||||{cachedDoubleCount}</h1>
      <button onClick={()=>setCount(count+1)}>Inc</button>

      <input type="text" value={text} 
      onChange={(e)=>{setText(e.target.value)}}
      />
      </>
    )
}
export default UseMemoComponent