import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useFormik } from 'formik';
import {useAddMoviesMutation} from './services/movieApi'


const AddRTKMovie = () => {
    const [addMovieDetailsRTK]=useAddMoviesMutation()
    // console.log(addMovieDetailsRTK)
    const navigate=useNavigate()
    const formik = useFormik({
        initialValues: {
            title: '',
            desc: '',
            trailer: '',
            poster: '',
            rating: '',
        },
        onSubmit: async(values) => {
            // console.log(values)
            //update  >> updated 
            
            const res=await addMovieDetailsRTK(values)
            console.log(res)
            formik.resetForm()
            navigate('/rtkquery')
        },
    });
   // console.log(formik)
 
    return (
        <>
        <h1>addmoviertk</h1>
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
                    <input type="submit" value="Add Movie!" />
                </div>
            </form>
            <button onClick={()=>navigate('/crud')}>🔙Back</button>


        </>
    )
}
export default AddRTKMovie
