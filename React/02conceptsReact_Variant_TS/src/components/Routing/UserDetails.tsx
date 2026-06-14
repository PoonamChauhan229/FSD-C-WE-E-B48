import { useParams } from "react-router-dom"

const UserDetails=({users})=>{
     console.log(useParams()) // return type object
    const {id}=useParams()
    console.log(typeof(id),typeof(users[0].id),typeof(parseInt(id)))
    console.log(users)

    const userFound=users.filter((element)=>element.id===parseInt(id))
     console.log(userFound) // [{}]

     const userFound1=users.find((element)=>element.id===parseInt(id))
     console.log(userFound1)//same datatype
    

    
    return(
        <>
            <h1>UserDetails-{id}</h1>

            {/* users array >> id also >>  find / filter  display the details id*/}

            {userFound?.map((element)=>(
                <h1>{element.name}</h1>
            ))}
       
        </>
    )
}
export default UserDetails