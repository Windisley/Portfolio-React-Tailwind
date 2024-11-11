import About from "./components/About"
import Header from "./components/Header"
import Home from "./components/Home"
import Techs from "./components/Techs"

function App() {

  return (
     
     <div className="
      w-full h-full bg-background
     ">
         <Header/>
         <main className="
          w-full h-full
         ">
          
          <div className="w-full h-full">
           <Home/>
          </div>

          <div className="w-full h-full">
            <About/> 
          </div>

          <div>
            <Techs/>
          </div>




         </main>
     </div>  

  )
}

export default App
