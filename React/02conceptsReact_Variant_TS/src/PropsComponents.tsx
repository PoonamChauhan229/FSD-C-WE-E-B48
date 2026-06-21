import { useState } from "react"
import FirstComponent from "./components/01reactUnderstanding/FirstComponent"
import UsersProfile from "./components/01reactUnderstanding/UsersProfile"
import { SimpleClass } from "./components/classComponents/SimpleClass"
import UseStateComponent from "./components/hooks/useStateComponent"

const PropsComponents=({users})=>{
    // array of objects

  
  return(
     <>
      <UsersProfile usersList={users} />
        
        <UseStateComponent usersList={users} />
        <SimpleClass fname="Guvi" />

        {/* simple props passing */}
        <div className='profile'>
          <FirstComponent lname="khanna" name="ashish" photo="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png" age={25} />
        </div>
        {/*  */}
       



      </>
  )
}
export default PropsComponents