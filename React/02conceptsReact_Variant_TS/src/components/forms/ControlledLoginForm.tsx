import { useState } from "react"
function ControlledLoginForm(){
    type FormDataSection={
        username:string,
        password:string
    }
    // controlled form >> ReactState >> taken up as an string 
    const [name,setName]=useState<string>("")
    const [email,setEmail]=useState<string>("")
    const [formData,setFormData]=useState<FormDataSection>({
        username:"",
        password:""
    })

    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(e.target.value)
            setEmail(e.target.value)
            console.log(typeof(email))
    }
    const handleChangeLogin=(e:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(e.target.value,e.target.name)
        setFormData({
            ...formData,
            // name:value
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        console.log(formData)
    }
    return(
        <>
            <h1>ControlledLoginForm</h1>
   
            
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" id="" value={formData.username} onChange={handleChangeLogin}/>

            <input type="password" name="password" id="" value={formData.password} onChange={handleChangeLogin}/>

            <input type="submit" value="Submit" />
        </form>
        <br/><br/>
        
        <h1>Input feilds</h1>
        {/* name/email & pass */}
        <input type="text" name="" id="" value={name} onChange={(e)=>{
            console.log(e.target.value)
            setName(e.target.value)
            console.log(typeof(name))
        }}/>
        <input type="email" name="" id="" value={email} onChange={handleChange} />
        <p>{name}-{email}</p>
        </>
    )
}
export default ControlledLoginForm

// DOM >> Virtual DOM
