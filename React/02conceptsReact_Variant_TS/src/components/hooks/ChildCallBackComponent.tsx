const ChildCallBackComponent=({cachedClickFn})=>{
    console.log("Child Rendered")
    // cachedClickFn here in a btn
    return(
        <>
        <h1>ChildCallBackComponent</h1>
        <button onClick={cachedClickFn}>ClickChild CBK</button>
        </>
    )
}
export default ChildCallBackComponent