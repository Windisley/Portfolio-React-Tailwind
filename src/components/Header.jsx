import { useRef, useEffect, useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";


const Header = () => {
   const [activemenu, setActiveMenu] = useState(true)
    
   const $nav = useRef()

   function Menu(){
     setActiveMenu( active=> !active)
    
   }

   function responav(event){
     if($nav.current && !$nav.current.contains(event.target)){
       setActiveMenu(true)
     }
   
    }
    
    useEffect(() => {
      
       document.addEventListener("mousedown", responav);

    
       return () => {
           document.removeEventListener("mousedown", responav);
       };
   }, []);
    return (
        

        <header className="
        w-full  bg-secundary flex justify-center
        h-16 fixed top-0 z-30
        ">
            64+32
            <div className=" w-full h-full py-8 max-w-contain flex items-center 
            justify-between px-4" >
            <p className="
             font-poppins uppercase text-primary cursor-pointer
            " onClick={()=>{window.scrollTo({top:0, behavior: "smooth"})}}>
                windisley dev
            </p>

            <nav className="
             
            ">
                <ul className={`${
                    window.innerWidth <= 700 ? "translate-x-full absolute flex-col items-center justify-center w-2/4 h-dvh" : ""} 
                    ${activemenu && window.innerWidth <= 700 ? "translate-x-full absolute top-20  right-0 hidden" : "left-0 flex"} 
                    flex gap-6 items-center bg-secundary 
                    `}
                 ref={$nav}
                 onClick={responav}>
                    <li className="
                     text-primary capitalize font-poppins
                     hover:translate-y-y5  duration-300 ease-out
                    ">
                        <a href="#home">
                            inicio
                        </a>
                    </li>
                    <li className="
                     text-primary capitalize font-poppins
                     hover:translate-y-y5  duration-300 ease-out
                    ">
                        <a href="#about">

                            sobre mim
                        </a>
                    </li>
                 
                    <li className="
                     text-primary capitalize font-poppins
                     hover:translate-y-y5  duration-300 ease-out
                    ">
                        <a href="#tecnologias">
                            habilidades

                        </a>
                    </li>
                    <li className="
                     text-primary capitalize font-poppins
                     hover:translate-y-y5  duration-300 ease-out
                    ">
                        <a href="#projetos">
                            projetos
                        </a>
                    </li>
                </ul>
            </nav>
                <div className={` ${window.innerWidth <=700 ? "block" : "hidden"}
                  duration-300 ease-in-out z-20
                `} onClick={Menu}>
                   {activemenu ?
                    <IoMenuSharp className="text-primary text-2xl cursor-pointer bg-transparent
                     hover:scale-125  duration-300 ease-in-out
                    "/>

                    :
                    <RiMenu3Line className="text-primary text-2xl cursor-pointer bg-transparent
                    hover:scale-125  duration-300 ease-in-out
                   "/>
                  }

                </div>


            </div>
        </header>
    )
}

export default Header