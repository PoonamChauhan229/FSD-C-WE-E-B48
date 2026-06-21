import GetContextData from "./GetContextData"
const ContextComponents = () => {
    return (
        <>
            <h1>Context API</h1>
                <GetContextData />
           
        
        </>
    )
}
export default ContextComponents


// Step 1: Create the context
// Step 2: Provide the context + Share the Data
// Step 3: Provide the Provider component to the App.tsx >> Wrap with that
// Till Step 3 >> U have made the data avaiable >> Publish
// Step 4:>>  read and subscribe to context  