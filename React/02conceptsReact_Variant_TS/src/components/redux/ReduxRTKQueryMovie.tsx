import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import {useGetMoviesQuery,useDeleteMoviesMutation} from './services/movieApi'


const ReduxRTKQueryMovie = () => {
    const movieData=useGetMoviesQuery() // object
    const {data,isLoading,isError}=movieData
    
    const [deleteMovie]=useDeleteMoviesMutation() // array
    
    // isLodaing >> true || data is yet to fetcg
    // isError >> true   || data is fetched >> false
    // data    >> hold the data
    console.log(data,isLoading,isError)

    const navigate = useNavigate()

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

   

    const handleDelete = async (id) => {
        console.log(id)
        const res=await deleteMovie(id)
        console.log(res)       
    }
  
    return (
        <>

            <div style={{ display: "flex", justifyContent: "space-between", padding: "5px" }}>

                <button onClick={() => navigate('/addmoviertk')}>Add Movie</button>
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
                        data?.map((element, index) => (
                            <tr>
                                <th scope="row">{element.id}</th>
                                <th scope="row">{element.title}</th>
                                <td>{element.poster}</td>
                                <td>{element.desc}</td>
                                <td>{element.trailer}</td>
                                <td>{element.rating}</td>
                                <td>
                                    <button onClick={() => navigate(`/editrtkmovie/${element.id}`)}>Edit</button>
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
export default ReduxRTKQueryMovie