import About from "./components/About"
import Header from "./components/Header"
import Home from "./components/Home"
import Projects from "./components/Projects"
import Techs from "./components/Techs"
import Footer from "./components/Footer"

function App() {

    
    console.log(window.scrollY)


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
            <Projects/>
          </div>

          <div className="w-full h-full">
            <Techs/>
          </div>

          <div className="w-full h-full">
            <About/> 
          </div>

             <Footer/>

         </main>
     </div>  

  )
}

export default App
