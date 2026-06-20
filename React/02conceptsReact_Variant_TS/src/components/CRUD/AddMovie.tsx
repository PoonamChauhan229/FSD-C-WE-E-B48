import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useFormik } from 'formik';


const AddMovie = () => {
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
             const res = await axios.post("https://6a361c63766b831960f8ef2e.mockapi.io/movie/movie/",values)
            console.log(res.data)
            formik.resetForm()
            navigate('/crud')
        },
    });
   // console.log(formik)
 
    return (
        <>
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
export default AddMovie


{/* <iframe width="838" height="471" src="https://www.youtube.com/embed/Fi1wAaQkJHU" title="SPIDER-MAN: BRAND NEW DAY - New Trailer - Hindi | Exclusively In Cinemas July 30" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}