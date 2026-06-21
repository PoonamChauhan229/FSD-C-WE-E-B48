import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import UserContext from "../Context/utilis-context/UserContext"

const DisplayMovie = () => {
    const navigate = useNavigate()
    const onecontextValue = useContext(UserContext)


    type MovieDataType = {
        rating: number,
        id: string,
        title: string,
        poster: string,
        trailer: string,
        desc: string
    }


    const [moviedb, setMovieDb] = useState<MovieDataType[]>([{
        "rating": 72,
        "title": "Bahbubali",
        "poster": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/95.jpg",
        "trailer": "https://loremflickr.com/418/3798?lock=3145492093449276",
        "desc": "Quos urbs comis natus consequuntur patruus confugo claustrum defluo.",
        "id": "1"
    }])

    async function fetchMovies() {
        const res = await axios.get("https://6a361c63766b831960f8ef2e.mockapi.io/movie/movie")
        console.log(res.data)
        setMovieDb(res.data)
    }

    const handleDelete = async (id) => {
        console.log(id)
        const res = await axios.delete("https://6a361c63766b831960f8ef2e.mockapi.io/movie/movie/" + id)
        console.log(res.data)
    }

    // Initial Render
    useEffect(() => {
        fetchMovies()
    }, [])

    return (
        <>
            <div style={{display:"flex",justifyContent:"space-between",padding:"5px"}}>
                
            <button
                onClick={() => navigate('/addMovie')}>Add Movie</button>
                <div><b>User Name - {onecontextValue?.nameDetails}</b></div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Sr.No</th>
                        <th scope="col">Title</th>
                        <th scope="col">Poster</th>
                        <th scope="col">Description</th>
                        <th scope="col">Trailer</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        moviedb.map((element, index) => (
                            <tr>
                                <th scope="row">{element.id}</th>
                                <th scope="row">{element.title}</th>
                                <td>{element.poster}</td>
                                <td>{element.desc}</td>
                                <td>{element.trailer}</td>
                                <td>{element.rating}</td>
                                <td><button onClick={() => navigate(`/editmovie/${element.id}`)}>Edit</button>
                                    <button onClick={() => handleDelete(element.id)}>Delete</button>
                                    <button onClick={() => navigate(`/movie/${element.id}`)}>View Details</button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>

            </table>

        </>
    )
}
export default DisplayMovie