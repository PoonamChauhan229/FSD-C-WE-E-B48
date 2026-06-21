// integral Part

import { useState } from "react"
import UserContext from "./utilis-context/UserContext"

// children component 
const ProviderComponent=({children}:any)=>{
    const [nameDetails,setnameDetails]=useState<string>("John")
    return(
        <>

        {/* // Providing the UserContext to the children components
            // Context is empty >> Fill that context the data >> useState hook 
            //
        */}
            <UserContext.Provider value={{nameDetails,setnameDetails}}>
                {children} {/* components */}
            </UserContext.Provider>
        </>
    )
}

export default ProviderComponent

