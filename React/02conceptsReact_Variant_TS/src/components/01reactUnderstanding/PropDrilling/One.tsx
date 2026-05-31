// let book:string;

import Two from "./Two"

function One({book,setBook}) {
    return (
       <>
       <h1>One</h1>
       <Two book={book} setBook={setBook}/>
       </>
    )
}
export default One

