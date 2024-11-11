import { useEffect, useRef } from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { DiJavascript } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { GrReactjs } from "react-icons/gr";
import { FaGitAlt } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

const Techs = ()=>{
    const carroselTechs = useRef()
    useEffect(()=>{
     
      console.log(carroselTechs.current)

    }, [])
    return(
        <section className="
          w-full min-h-full m-marginceltralize
        ">
         <h3 className="
           text-center my-4 capitalize font-poppins text-xl
         ">
            habilidades
         </h3>

         <div className="
           max-w-contain h-full flex justify-center
           items-center overflow-hidden p-8 m-marginceltralize 
           border
         ">
            <div className="
             w-full h-full border flex gap-4 relative 
             p-8  justify-end items-center 
            " ref={carroselTechs}>
         
            <div className="
                flex flex-col items-center justify-center 
                gap-2 text-primary
            ">
                <FaHtml5 className="
                 text-5xl text-primary cursor-pointer
                "/>
                <p className="
                    capitalize font-poppins text-center 
                    text-lg
                ">
                    html
                </p>
            </div>

            <div className="
                flex flex-col items-center justify-center 
                gap-2 text-primary
            ">
              <FaCss3Alt className="
               text-5xl text-primary cursor-pointer
              "/>
              <p className="
                capitalize font-poppins text-center 
                text-lg
              ">
                 css
              </p>
            </div>
            <div className="
                flex flex-col items-center justify-center 
                gap-2 text-primary
            ">
                <DiJavascript className="
                 text-5xl text-primary cursor-pointer
                "/>
                <p className="
                    capitalize font-poppins text-center 
                    text-lg
                ">
                   javascript
                </p>
            </div>

            <div className="
                flex flex-col items-center justify-center 
                gap-2 text-primary
            ">
                <GrReactjs className="
                 text-5xl text-primary cursor-pointer
                "/>
                <p className="
                    capitalize font-poppins text-center 
                    text-lg
                ">
                   react js
                </p>
            </div>

            <div className="
                flex flex-col items-center justify-center 
                gap-2 text-primary
            ">
                <RiTailwindCssFill className="
                 text-5xl text-primary cursor-pointer
                "/>
                <p className="
                    capitalize font-poppins text-center 
                    text-lg
                ">
                  tailwind css
                </p>
            </div>
            <div className="
                flex flex-col items-center justify-center 
                gap-2 text-primary
            ">
               <FaGitAlt className="
                text-5xl text-primary cursor-pointer
               "/>
               <p className="
                capitalize font-poppins text-center 
                text-lg
               ">
                    git
               </p>
            </div>
            <div className="
                flex flex-col items-center justify-center 
                gap-2 text-primary
            ">
                <FaGithubSquare className="
                 text-5xl text-primary cursor-pointer
                "/>
                <p className="
                    capitalize font-poppins text-center 
                    text-lg
                ">
                   github
                </p>
            </div>

            <div className="
                flex flex-col items-center justify-center 
                gap-2 text-primary
            ">
                <FaFigma className="
                 text-5xl text-primary cursor-pointer
                "/>
                <p className="
                    capitalize font-poppins text-center 
                    text-lg
                ">
                   figma
                </p>
            </div>
            <div className="
                flex flex-col items-center justify-center 
                gap-2 text-primary
            ">
                <SiTypescript className="
                 text-5xl text-primary cursor-pointer
                "/>
                <p className="
                    capitalize font-poppins text-center 
                    text-lg
                ">
                   typescript
                </p>
            </div>
            
               
            </div>
         </div>

        </section>
    )
}

export default Techs