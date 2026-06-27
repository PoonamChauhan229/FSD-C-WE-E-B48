import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import UserContext from "./Context/utilis-context/UserContext"


const Navbar = () => {
        const navbarcontextValue = useContext(UserContext)

    const navigate=useNavigate()
    return (
        <div className="navbar">
            <div className="subItems"><Link className="subItems" to='/UseCallbackComponent'>UseCallbackComponent</Link></div>
            <div className="subItems"><Link className="subItems" to='/UseMemoComponent'>UseMemoComponent</Link></div>
            <div className="subItems"><Link className="subItems" to='/UseReducerComponent'>UseReducerComponent</Link></div>
            <div className="subItems"><Link className="subItems" to='/UseEffectComponent'>UseEffectComponent</Link></div>
            <div className="subItems"><Link className="subItems" to='/FormikSignupForm'>FormikSignupForm</Link></div>
            <div className="subItems"><Link className="subItems" to='/UnControlledLoginForm'>UnControlledLoginForm</Link></div>
            <div className="subItems"><Link className="subItems" to='/ControlledLoginForm'>ControlledLoginForm</Link></div>
            <div className="subItems"><Link className="subItems" to='/PropsComponents'>PropsComponents</Link></div>
            <div className="subItems"><Link className="subItems" to='/Propsdrilling'>PropsDrilling</Link></div>
             <div className="subItems"><Link className="subItems" to='/contextapi'>Context API</Link></div>

            <div className="subItems"><Link className="subItems" to='/crud'>CRUD</Link></div>
            <button onClick={()=>navigate('/FormikSignupForm')}>Forms</button>
            <div className="subItems">{navbarcontextValue?.nameDetails}</div>
            <button onClick={()=>navigate('/redux')}>Redux</button>
        </div>
    )
}
export default Navbar