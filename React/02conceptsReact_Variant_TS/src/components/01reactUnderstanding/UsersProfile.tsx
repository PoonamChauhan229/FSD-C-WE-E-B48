interface UserProps {
    id: number,
    name: string,
    age: number
}

type UserListProps={
    usersList:UserProps[]
}

const UsersProfile = ({usersList}:UserListProps) => {
    console.log(usersList) // proper object        
  return(
    <>
        <h3>{usersList[0].name}</h3>
        {
            usersList.map(({id,name,age})=>(
                <div key={id}>
                    <h3>{name}-{age}</h3>
                </div>
            ))
        }
    </>
  )
}
export default UsersProfile