import Four from "./Four"

function Three({book,setBook}) {
    return (
       <>
       <h1>Three</h1>
       <Four book={book} setBook={setBook}/>
       </>
    )
}
export default Three

