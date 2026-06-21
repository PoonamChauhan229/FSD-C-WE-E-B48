import One from "./One"

const PropDrillingComponents=({book,setBook})=>{
    return(
        <>
        <h1>Props Drilling</h1>
        <One book={book} setBook={setBook} />
        </>
    )
}
export default PropDrillingComponents