import { useRef } from "react"

function UnControlledLoginForm(){
    // useRef
    const usernameRef=useRef<HTMLInputElement>(null)
    const passwordRef=useRef<HTMLInputElement>(null)
    console.log(usernameRef,passwordRef)
     console.log(usernameRef.current,passwordRef.current) 
     const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        // usernameRef.current >> DOM INPUT ELEMENT
        const username=usernameRef.current?.value
        const password=passwordRef.current?.value
        console.log(username,password)

        //play a video & pause of video >> 
    }
    return(
               <>
                <h1>UnControlledLoginForm</h1>    
                
                <form onSubmit={handleSubmit}>
                    <input type="text" name="username" id="" ref={usernameRef} defaultValue={"guvi123"}/>

                    <input type="password" name="password" id="" ref={passwordRef} defaultValue={"123"}/>

                    <input type="submit" value="Submit" />
                </form>
                <br/><br/>
        </>
    )
}
export default UnControlledLoginForm


// controlled form >>useState hook + onchangle +value   >> form submission
// uncontrolled form >> useRef  hook+defaultValue       >> form submission