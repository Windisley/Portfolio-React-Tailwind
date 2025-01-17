import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

import viacep from "../assets/imgs/viacep.png"
import landingpg from "../assets/imgs/Home_landing-page.png"
import gamesnake from "../assets/imgs/game_snake.png"
import ecommerce from "../assets/imgs/Ecommerce.png"
import cronometro from "../assets/imgs/cronometro.png"
import calculadora from "../assets/imgs/calculadora.png"
import Homeimg from "../assets/imgs/Home.png";
import mondial from "../assets/imgs/Home_mondial.png"
import wmacabamentos from "../assets/imgs/wmhome.png"

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { GrReactjs } from "react-icons/gr";
import { FaFigma } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

import { useEffect, useRef, useState } from "react";



const Projects = ()=>{
    const iconMap = {
        html: <FaHtml5 className="text-3xl text-primary hover:text-primarydark duration-300 ease-in-out" title="Html" aria-label="HTML"/>,
        css: <FaCss3Alt className="text-3xl text-primary hover:text-primarydark duration-300 ease-in-out" title="Css" aria-label="CSS"/>,
        javascript: <DiJavascript className="text-3xl text-primary hover:text-primarydark duration-300 ease-in-out" title="Javascript" aria-label="JAVASCRIPT"/>,
        react: <GrReactjs className="text-3xl text-primary hover:text-primarydark duration-300 ease-in-out" title="React js" aria-label="REACT JS"/>,
        tailwind: <RiTailwindCssFill className="text-3xl text-primary hover:text-primarydark duration-300 ease-in-out" title="Tailwind Css" aria-label="TAILWIND CSS"/>,
        figma: <FaFigma className="text-3xl text-primary hover:text-primarydark duration-300 ease-in-out" title="Figma" aria-label="FIGMA"/>,
        typescript: <SiTypescript className="text-3xl text-primary hover:text-primarydark duration-300 ease-in-out" title="TYPESCRIPT" aria-label="TYPESCRIPT"/>
      };
    
    const imgsProjects1 = [
        {
            img: Homeimg,
            text: `Este é o meu portfólio online, sou Windisley Lima Moreira, um desenvolvedor front-end especializado na criação de sites modernos e funcionais. Aqui, você encontrará uma variedade de projetos, como blogs, e-commerces e landing pages, que demonstram minhas habilidades e conhecimentos em tecnologias atuais.`,
            id: 1,
            github: "https://github.com/Windisley/Portfolio-React-Tailwind",
            previa: "",
            techs: ["javascript", "react", "tailwind", "figma"]
        },
        
        {
            img: wmacabamentos,
            text: "Este projeto é um site desenvolvido para a empresa WM Acabamentos, especializada na fabricação de móveis planejados, assentamento de portas, empalhamento de cadeiras e outros serviços de marcenaria.",
            id: 2,
            github: "https://github.com/Windisley/WM-Acabamentos",
            previa: "https://wmacabamentosmoveis.com.br/#inicio",
            techs: ["html","tailwind", "javascript", "figma",]
        },
        
        
        {
            img: landingpg,
            text: "Desenvolvi uma landing page otimizada para divulgar o monitor gamer Samsung T350, com foco em acessibilidade, SEO e experiência do usuário, garantindo uma navegação intuitiva e eficaz na conversão de clientes.",
            id: 3,
            github: "https://github.com/Windisley/Landing-page-monitor",
            previa: "https://monitor-gamer-sansung-t350.com.br/",
            techs: ["html","javascript", "tipescript", "tailwind",]
        },
        {
            img: mondial,
            text: "Este projeto é uma landing page desenvolvida para promover o Super Groom 10, um aparador de pelos multifuncional da Mondial. A página foi projetada para destacar os benefícios, funcionalidades e a garantia do produto, oferecendo uma experiência visual moderna e interativa.",
            id: 4,
            github: "https://github.com/Windisley/Laging-Page-Mondial",
            previa: "https://www.aparadormondial.com.br/",
            techs: ["react","javascript", "tipescript", "tailwind",]
        },
        {
            img: viacep,
            text: `ViaCEP é uma aplicação que busca informações de endereços no Brasil a partir de um CEP informado.\nUsando a API pública do ViaCEP, ele retorna dados como rua, bairro, cidade e estado, simplificando o preenchimento de formulários de endereço e proporcionando uma experiência de usuário mais rápida e automatizada.`,
            id: 5,
            github: "https://github.com/Windisley/Via-Cep",
            previa: "https://via-cep-ten.vercel.app/",
            techs: ["javascript", "react", "css",]
        },
    
    ]

    const imgsProjects2 = [
        {
            img: gamesnake,
            text: "Snake Game - Recriação Clássica com JavaScript Este projeto recria o clássico jogo Snake, no qual o jogador controla uma cobra que cresce conforme come frutas e evita colisões consigo mesma e com as bordas do tabuleiro. Desenvolvido com JavaScript, HTML5 e CSS, o jogo utiliza lógica baseada em grids, eventos de teclado e um loop de animação para o movimento contínuo da cobra.",
            id: 6,
            github: "https://github.com/Windisley/Game-Snake-2.0",
            previa: "https://guileless-shortbread-3187fa.netlify.app",
            techs: ["html", "css", "javascript",]
        },
        {
            img: ecommerce,
            text: "Este projeto é uma plataforma de e-commerce focada na venda de relógios, desenvolvida com um front-end moderno. O site permite aos usuários explorar um catálogo detalhado de produtos, com descrições e imagens atraentes. A funcionalidade de carrinho possibilita adicionar e remover relógios, mantendo o controle dos itens desejados. Sem integração de pagamento, o foco é em proporcionar uma experiência de navegação fluida e intuitiva, simulando a dinâmica de um e-commerce real.",
            id: 7,
            github: "https://github.com/Windisley/E-commerce",
            previa: "https://e-commerce-sigma-nine-35.vercel.app/",
            techs: ["javascript", "react", "tailwind",]
        },
        {
            img: cronometro,
            text: "Projeto de cronômetro desenvolvido com React, permitindo iniciar, parar e resetar a contagem do tempo. Utiliza hooks como useState e useEffect para gerenciar o estado e garantir a atualização precisa do tempo em tela, oferecendo uma interface simples e funcional.",
            id: 8,
            github: "https://github.com/Windisley/Cronometro-React",
            previa: "https://cronometro-react-pi.vercel.app/",
            techs: ["css", "javascript", "react",]
        },
        {
            img: calculadora,
            text: "calculadora desenvolvido com React, capaz de realizar as operações matemáticas básicas como adição, subtração, multiplicação e divisão. A interface é interativa, permitindo ao usuário inserir números e operadores, com a funcionalidade de exibir o resultado das expressões em tempo real.",
            id: 9,
            github: "https://github.com/Windisley/Calculadora-React",
            previa: "https://calculadora-react--ruddy.vercel.app/",
            techs: ["javascript", "react", "tailwind",]
        },
    ]

    const carroselprojects = useRef()
    const carroselprojects2 = useRef()

   
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    useEffect(()=>{
        const projects = carroselprojects.current
        projects.style.transform = `translateX(${-100 * count}%)`

       
        
    }, [count])

    function Next(){
       
        setCount((nextcount)=>{
            if(count >= imgsProjects1.length -1){
              
                
               return nextcount
            }

            return nextcount +1 
            
        })

    }

    function Prev(){
        console.log(count)

        setCount((prevcount)=>{
        if(prevcount <= 0){
             
        return 0
    
        }
        return prevcount - 1

        })
    }


    useEffect(()=>{
        const projects2 = carroselprojects2.current
        projects2.style.transform = `translateX(${-100 * count2}%)`

       
        
    }, [count2])

    function Next2(){
        
        setCount2((nextcount)=>{
            if(count2 >= imgsProjects2.length -1){
              
                
               return nextcount
            }

            return nextcount +1 
            
        })

    }

    function Prev2(){
        
        setCount2((prevcount)=>{
        if(prevcount <= 0){
             
        return 0
    
        }
        return prevcount - 1

        })
    }
    
    
    return(
        <section className="
         w-full min-h-dvh
        " id="projetos">   
        <h4 className="
         text-center py-4 text-2xl font-poppins-semibold text-text
         capitalize
        ">
            projetos
        </h4>

        <div className="
         w-full max-w-contain min-h-full m-marginceltralize
         my-4 flex items-center justify-center overflow-hidden
        relative 
        ">
       
            <div className=" max-w-full h-full m-marginceltralize
             flex  gap-4 p-2 translate-x-0 duration-500 ease-in-out relative
            " ref={carroselprojects}>

              
            {imgsProjects1.map((contain)=>(    
           <div className="
            min-w-full h-full flex flex-col gap-8 justify-center
            items-center grow 
           " key={contain.id}>
               <div className="
                w-full h-full flex flex-col items-center 
                gap-2 justify-center
               ">
                   <div className="
                    min-w-full  h-full
                   ">
                       <img src={contain.img} alt={contain.text} className="
                        object-contain object-center w-full h-full 
                        border border-gray min-h-80 
                       " loading="lazy"/>
                   </div>
                   <p className="
                    moba:w-full p-1 mobalg:w-2/3  text-left font-poppins capitalize 
                    text-base my-4 text-text 
                   ">
                    {contain.text}
                         
                   </p>
               </div>

               <div className="
                 w-full max-w-contain h-full flex moba:flex-col mobalg:flex-row justify-between gap-4  my-4 items-center
               ">
                <div className="
                   w-full max-w-contain h-full grid moba:grid-cols-1 desktop:grid-cols-2 
                   gap-4  moba:place-items-center mobalg:place-items-start
                ">


                  <div className="
                   max-w-full w-72 h-full py-4 px-8 bg-secundary rounded-lg
                   flex justify-between gap-4
                  ">
                      <FaArrowCircleLeft className="
                       text-primary text-4xl cursor-pointer hover:text-primarydark
                       duration-300 ease-in-out
                      " onClick={Prev}/>
                      <FaArrowCircleRight className="
                       text-primary text-4xl cursor-pointer hover:text-primarydark
                        duration-300 ease-in-out
                      " onClick={Next}/>
                  </div>
                  <div className="
                    max-w-contain h-full flex 
                    gap-4 
                  ">
                    {contain.previa != "" &&
                    <a href={contain.previa} className="
                     max-w-full h-full flex justify-center items-center 
                    " target="blank">
                        <button className="
                         max-w-80 capitalize font-poppins
                         text-primary rounded-lg bg-secundary
                         py-2 px-8 hover:shadow-shadowdark duration-300
                         ease-in-out border border-primarydark
                        ">
                            Site
                        </button>
                    </a>
                    

                    }
                    <a href={contain.github} className="
                     max-w-full h-full flex justify-center items-center
                    " target="blank">
                        <button className="
                         max-w-80 capitalize font-poppins
                         text-primary rounded-lg bg-secundary
                         py-2 px-8 hover:shadow-shadowdark duration-300
                         ease-in-out border border-primarydark
                        ">
                            repositorio
                        </button>
                    </a>
                  </div>
                </div>
                  <div className="
                   max-w-full h-full flex gap-4 
                  " key={contain.id}>
                    {
                        contain.techs.map((tech)=>(
                           iconMap[tech]
                        ))
                    }
                  
                  </div>
               </div>
           </div>
            ))}
   
            </div>


            </div>
            {/* outro cr */}
            <div className="
         w-full max-w-contain min-h-full m-marginceltralize
        my-4 flex items-center justify-center overflow-hidden
        relative 
        ">
            <div className=" max-w-full h-full m-marginceltralize
             flex  gap-4 p-2 translate-x-0 duration-500 ease-in-out relative
            "ref={carroselprojects2}>

              
            {imgsProjects2.map((contain)=>(    
           <div className="
            min-w-full h-full flex flex-col gap-8 justify-center
            items-center grow 
           " key={contain.id}>
               <div className="
                w-full h-full flex flex-col items-center 
                gap-2 justify-center
               ">
                   <div className="
                    min-w-full  h-full
                   ">
                       <img src={contain.img} alt={contain.text} className="
                        object-contain object-center w-full h-full 
                        border border-gray min-h-80 
                       " loading="lazy"/>
                   </div>
                   <p className="
                    moba:w-full p-1 mobalg:w-2/3  text-left font-poppins capitalize 
                    text-base my-4 text-text 
                   ">
                    {contain.text}
                         
                   </p>
               </div>

               <div className="
                 w-full max-w-contain h-full flex moba:flex-col mobalg:flex-row justify-between gap-4  my-4 items-center
               ">
                <div className="
                   w-full max-w-contain h-full grid moba:grid-cols-1 desktop:grid-cols-2 
                   gap-4  moba:place-items-center mobalg:place-items-start
                ">


                  <div className="
                   max-w-full w-72 h-full py-4 px-8 bg-secundary rounded-lg
                   flex justify-between gap-4
                  ">
                      <FaArrowCircleLeft className="
                       text-primary text-4xl cursor-pointer hover:text-primarydark
                       duration-300 ease-in-out
                      " onClick={Prev2}/>
                      <FaArrowCircleRight className="
                       text-primary text-4xl cursor-pointer hover:text-primarydark
                        duration-300 ease-in-out
                      " onClick={Next2}/>
                  </div>
                  <div className="
                    max-w-contain h-full flex 
                    gap-4 
                  ">
                    <a href={contain.previa} className="
                     max-w-full h-full flex justify-center items-center 
                    " target="blank">
                        <button className="
                         max-w-80 capitalize font-poppins
                         text-primary rounded-lg bg-secundary
                         py-2 px-8 hover:shadow-shadowdark duration-300
                         ease-in-out border border-primarydark
                        ">
                            Site
                        </button>
                    </a>
                    <a href={contain.github} className="
                     max-w-full h-full flex justify-center items-center
                    " target="blank">
                        <button className="
                         max-w-80 capitalize font-poppins
                         text-primary rounded-lg bg-secundary
                         py-2 px-8 hover:shadow-shadowdark duration-300
                         ease-in-out border border-primarydark
                        ">
                            repositorio
                        </button>
                    </a>
                  </div>
                </div>
                  <div className="
                   max-w-full h-full flex gap-4 
                  " key={contain.id}>
                     {
                        contain.techs.map((tech)=>(
                           iconMap[tech]
                        ))
                    }
                  </div>
               </div>
           </div>
            ))}
        </div>


        </div>
       


        </section>
    )
}

export default Projects