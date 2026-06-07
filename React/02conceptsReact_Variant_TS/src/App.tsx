import { useState } from 'react'
import './App.css'
import FirstComponent from './components/01reactUnderstanding/FirstComponent'
import One from './components/01reactUnderstanding/PropDrilling/One'
import SecondComponent from './components/01reactUnderstanding/SecondComponent'
import UsersProfile from './components/01reactUnderstanding/UsersProfile'
import {SimpleClass} from './components/classComponents/SimpleClass'
import UseStateComponent from './components/hooks/useStateComponent'
import ControlledLoginForm from './components/forms/ControlledLoginForm'
import UnControlledLoginForm from './components/forms/UnControlledLoginForm'
import FormikSignupForm from './components/forms/FormikSignUpForm'
import UseEffectComponent from './components/hooks/UseEffectComponent'



function App() {
  // array of objects
  const users=[
    {
      id:1,
      name:"abc",
      age:34
    },
      {
      id:2,
      name:"pqr",
      age:35
    },
      {
      id:3,
      name:"fgh",
      age:36
    },
      {
      id:4,
      name:"iop",
      age:34
    },
      {
      id:5,
      name:"ert",
      age:45
    },
      {
      id:6,
      name:"wer",
      age:30
    },
  ]
  const [book,setBook]=useState<string>("Two States")
  return (

    <>
    <UseEffectComponent/>
    <FormikSignupForm/> 
    <UnControlledLoginForm/>
    <ControlledLoginForm/>
    {/* // lname ,name,photo */}
    <>
    <One book={book} setBook={setBook}/>
    <UseStateComponent usersList={users}/>
    <SimpleClass fname="Guvi" />
    
    {/* simple props passing */}
    <div className='profile'>
      <FirstComponent lname="khanna" name="ashish" photo="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png" age={25}/>

      
    </div>
    {/*  */}
    <UsersProfile usersList={users}/>



    </>
    </>
  )
}

export default App

// Generally App.css
// index.css > index.html



// Task
// static website >> React |TS
// netifly link 

// return >>end of that program ||resue ||no code executes >> 3things 