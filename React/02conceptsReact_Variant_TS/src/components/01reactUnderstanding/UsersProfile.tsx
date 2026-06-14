import { useNavigate } from "react-router-dom"

interface UserProps {
    id: number,
    name: string,
    age: number
}

type UserListProps={
    usersList:UserProps[]
}

const UsersProfile = ({usersList}:UserListProps) => {
        const navigate=useNavigate()
    console.log(usersList) // proper object        
  return(
    <>
        <h3>{usersList[0].name}</h3>
        {
            usersList.map(({id,name,age})=>(
                <div key={id}>
                    <h3>{name}-{age}</h3>
                    {/* userDetails/3 */}
                    <button onClick={()=>navigate(`/userDetails/${id}`)}>Visit Details</button>
                </div>
            ))
        }
    </>
  )
}
export default UsersProfile