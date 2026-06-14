import { useNavigate } from "react-router-dom"

const RouteComponent=()=>{
    const navigate=useNavigate()
   
    return(
        <>
            <button onClick={()=>navigate('/FormikSignupForm')}>Forms</button>
            
            <button>Test4</button>
        </>
    )
}
export default RouteComponent