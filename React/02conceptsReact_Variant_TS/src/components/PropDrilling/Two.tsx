import Three from "./Three"

function Two({book,setBook}) {
    return (
       <>
       <h1>Two</h1>
       <Three book={book} setBook={setBook}/>
       </>
    )
}
export default Two

