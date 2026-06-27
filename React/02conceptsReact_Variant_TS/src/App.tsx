import './App.css'
import ControlledLoginForm from './components/forms/ControlledLoginForm'
import UnControlledLoginForm from './components/forms/UnControlledLoginForm'
import FormikSignupForm from './components/forms/FormikSignUpForm'
import UseEffectComponent from './components/hooks/UseEffectComponent'
import UseReducerComponent from './components/hooks/UseReducerComponent'
import UseMemoComponent from './components/hooks/UseMemoComponent'
import UseCallbackComponent from './components/hooks/UseCallbackComponent'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import PropsComponents from './PropsComponents'
import { useState } from 'react'
import RouteComponent from './components/Routing/RouteComponent'
import UserDetails from './components/Routing/UserDetails'
import DisplayMovie from './components/CRUD/DisplayMovie'
import ViewMovieDetails from './components/CRUD/ViewMovieDetails'
import EditMovie from './components/CRUD/EditMovie'
import AddMovie from './components/CRUD/AddMovie'
import PropDrillingComponents from './components/PropDrilling/PropDrillingComponents'
import ContextComponents from './components/Context/ContextComponents'
import ProviderComponent from './components/Context/ProviderComponent'
import ReduxMovie from './components/redux/ReduxMovie'

function App() {
  const [book, setBook] = useState<string>("Two States")
  const users = [
    {
      id: 1,
      name: "abc",
      age: 34
    },
    {
      id: 2,
      name: "pqr",
      age: 35
    },
    {
      id: 3,
      name: "fgh",
      age: 36
    },
    {
      id: 4,
      name: "iop",
      age: 34
    },
    {
      id: 5,
      name: "ert",
      age: 45
    },
    {
      id: 6,
      name: "wer",
      age: 30
    },
  ]
  return (

    <ProviderComponent>
      <Navbar />
        {/* <RouteComponent/> */}
      <Routes>
        <Route path='/UseCallbackComponent' element={<UseCallbackComponent />} />
        <Route path='/UseMemoComponent' element={<UseMemoComponent />} />

        <Route path='/UseReducerComponent' element={<UseReducerComponent />} />
        <Route path='/UseEffectComponent' element={<UseEffectComponent />} />
        <Route path='/FormikSignupForm' element={<FormikSignupForm />} />
        <Route path='/UnControlledLoginForm' element={<UnControlledLoginForm />} />
        <Route path='/ControlledLoginForm' element={<ControlledLoginForm />} />
        <Route path='/PropsComponents' element={<PropsComponents users={users}/>} />
         <Route path='/Propsdrilling' element={<PropDrillingComponents book={book} setBook={setBook}/>} />
         <Route path='/contextapi' element={<ContextComponents book={book} setBook={setBook}/>} />

        <Route path='/addmovie' element={<AddMovie/>}/>
        {/* dynamic routes */}
        <Route path='userDetails/:id' element={<UserDetails users={users}/>}/>
        <Route path='movie/:id' element={<ViewMovieDetails/>}/>
        <Route path='/crud' element={<DisplayMovie/>}/>
         <Route path='editmovie/:id' element={<EditMovie/>}/>
          <Route path='redux' element={<ReduxMovie/>}/>

         
      </Routes>
    </ProviderComponent>
  )
}

export default App

// Generally App.css
// index.css > index.html



// Task
// static website >> React |TS
// netifly link 

// return >>end of that program ||resue ||no code executes >> 3things 