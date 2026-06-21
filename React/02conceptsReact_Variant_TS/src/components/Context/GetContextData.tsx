import { useContext } from "react"
import UserContext from "./utilis-context/UserContext"

const GetContextData=()=>{
    const contextValue=useContext(UserContext) // subscribed
    
    console.log(contextValue)
    console.log(contextValue?.nameDetails)
    return(
            <>
                <h1>GetContextData-{contextValue?.nameDetails}</h1>
            </>

    )
}
export default GetContextData