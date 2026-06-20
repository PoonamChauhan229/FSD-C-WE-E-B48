import axios from "axios"
import { useState } from "react"
import { useParams } from "react-router-dom"

const ViewMovieDetails = () => {
    const { id } = useParams()
    const [singleViewMovie, setSingleViewMovie] = useState({})

    const handleview = async () => {
        console.log(id)
        const res = await axios.get("https://6a361c63766b831960f8ef2e.mockapi.io/movie/movie/" + id)
        console.log(res.data)
        setSingleViewMovie(res.data)
    }
    return (
        <>
            <h1><button onClick={() => handleview()}>View Details-{id}</button></h1>
            {singleViewMovie && <div className="cards">
                <article className="card">
                    <header>
                        <h2>{singleViewMovie?.title}-{singleViewMovie?.desc}</h2>                
                    </header>

                    <img height={500} width={800}
                        src={singleViewMovie?.poster}

                       />
                   

                    <iframe width="700" height="401" src={singleViewMovie?.trailer}  frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </article>
            </div>}
        </>
    )
}
export default ViewMovieDetails