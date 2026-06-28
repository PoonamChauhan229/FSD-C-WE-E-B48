import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useFormik } from 'formik';

import { useGetSingleMoviesQuery, useUpdateMoviesMutation } from './services/movieApi'

const EditRTKMovie = () => {
    const { id } = useParams()
    const { data, isLoading, isError } = useGetSingleMoviesQuery(id)
    const [updateMovieDetailsRTK] = useUpdateMoviesMutation()
    // console.log(data)
    // console.log(singleMovie)

    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            title: data?.title,
            desc: data?.desc,
            trailer: data?.trailer,
            poster: data?.poster,
            rating: data?.rating,
        },
        enableReinitialize: true, // apis 
        onSubmit: async (values) => {
            console.log(values)
            // update  >> updated            
            const res = await updateMovieDetailsRTK({
                id,
                movie: values
            })
            console.log(res)
            navigate('/rtkquery')
        },
    });
    // console.log(formik)


    return (
        <>
            <h1>editrtkmovie</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-example">
                    <label htmlFor="title">Enter your Title: </label>
                    <input type="text" name="title" id="title" required value={formik.values?.title}
                        onChange={formik.handleChange} />
                </div>
                <div className="form-example">
                    <label htmlFor="desc">Enter your Desc: </label>
                    <input type="text" name="desc" id="desc" required value={formik.values?.desc}
                        onChange={formik.handleChange} />
                </div>
                <div className="form-example">
                    <label htmlFor="trailer">Enter your Trailer: </label>
                    <input type="text" name="trailer" id="trailer" required value={formik.values?.trailer}
                        onChange={formik.handleChange} />
                </div>
                <div className="form-example">
                    <label htmlFor="rating">Enter your Rating: </label>
                    <input type="text" name="rating" id="rating" required value={formik.values?.rating}
                        onChange={formik.handleChange} />
                </div>
                <div className="form-example">
                    <label htmlFor="poster">Enter your Poster: </label>
                    <input type="text" name="poster" id="poster" required value={formik.values?.poster}
                        onChange={formik.handleChange} />
                </div>
                <div className="form-example">
                    <input type="submit" value="Update!" />
                </div>
            </form>
            <button onClick={() => navigate('/rtkquery')}>🔙Back</button>


        </>
    )
}
export default EditRTKMovie