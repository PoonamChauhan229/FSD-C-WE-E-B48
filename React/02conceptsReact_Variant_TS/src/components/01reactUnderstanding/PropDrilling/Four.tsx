import Five from "./Five"

function Four({book,setBook}) {
    return (
       <>
       <h1>Four</h1>
       <Five book={book} setBook={setBook}/>
       </>
    )
}
export default Four

