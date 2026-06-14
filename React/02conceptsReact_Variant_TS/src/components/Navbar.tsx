import { Link, useNavigate } from "react-router-dom"


const Navbar = () => {
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
            <button onClick={()=>navigate('/FormikSignupForm')}>Forms</button>
        </div>
    )
}
export default Navbar