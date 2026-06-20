import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useFormik } from 'formik';


const EditMovie = () => {
    const navigate=useNavigate()
    const formik = useFormik({
        initialValues: {
            title: '',
            desc: '',
            trailer: '',
            poster: '',
            rating: '',
        },
        enableReinitialize:true, // apis 
        onSubmit: async(values) => {
            // console.log(values)
            //update  >> updated 
             const res = await axios.put("https://6a361c63766b831960f8ef2e.mockapi.io/movie/movie/" + id,values)
            console.log(res.data)
            navigate('/crud')
        },
    });
   // console.log(formik)
    const { id } = useParams()
    // const [singleEditMovie, setSingleEditMovie] = useState({})


    const handleEdit = async () => {
        console.log(id)
        const res = await axios.get("https://6a361c63766b831960f8ef2e.mockapi.io/movie/movie/" + id)
        // console.log(res.data)

        formik.setValues({
            title: res.data.title,
            desc: res.data.desc,
            trailer: res.data.trailer,
            poster: res.data.poster,
            rating: res.data.rating,
        })
    }
    useEffect(() => {
        handleEdit()
    }, [])
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
                    <input type="submit" value="Update!" />
                </div>
            </form>
            <button onClick={()=>navigate('/crud')}>🔙Back</button>


        </>
    )
}
export default EditMovie