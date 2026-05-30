import './App.css'
import FirstComponent from './components/01reactUnderstanding/FirstComponent'
import SecondComponent from './components/01reactUnderstanding/SecondComponent'
import UsersProfile from './components/01reactUnderstanding/UsersProfile'
import {SimpleClass} from './components/classComponents/SimpleClass'

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

  return (
    // lname ,name,photo
    <>
    <SimpleClass fname="Guvi" />
    
    {/* simple props passing */}
    <div className='profile'>
      <FirstComponent lname="khanna" name="ashish" photo="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png" age={25}/>

      
    </div>
    {/*  */}
    <UsersProfile usersList={users}/>



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