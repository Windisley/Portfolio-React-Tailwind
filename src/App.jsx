import Header from "./components/Header"
import Home from "./components/Home"

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


         </main>
     </div>  

  )
}

export default App
