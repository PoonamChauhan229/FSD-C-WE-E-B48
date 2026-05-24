import './App.css'
import FirstComponent from './components/01reactUnderstanding/FirstComponent'
import SecondComponent from './components/01reactUnderstanding/SecondComponent'
function App() {

  return (
    <>
      {/* JSX >> html code inside JS */}
      {/* <div>
        <h1>Heloo Everyone !</h1>
        <div></div>

        <p>Hello Amit</p>

        <section>
          <h1>Welcome to Durga Page</h1>
          <div> JS </div>
          <div> CSS </div>
          <div> TSS </div>
        </section>
      </div> */}
      {/* Any JS/TS code  >> {}*/}
     
      {
        // JS call >> big no
        // FirstComponent()
       
      }
      {/* Opening & closing  >> inbetween write something*/}
      <FirstComponent></FirstComponent>
      <FirstComponent></FirstComponent>

    {/*self closing  */}
      <FirstComponent name="Poonam" lname="Chauhan"/>
      <FirstComponent name="Amit" photo="https://w7.pngwing.com/pngs/445/734/png-transparent-mythical-phoenix-watercolor-resplendent-flaming-phoenix-bird-thumbnail.png"/>

      {/* props  */}

      <SecondComponent/>

      {/* <HomePage/> */}
          

      

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