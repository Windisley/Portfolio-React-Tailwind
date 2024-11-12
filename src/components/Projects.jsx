import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

import viacep from "../assets/imgs/viacep.png"
import tolist from "../assets/imgs/to-do-list.png"
import pokeapi from "../assets/imgs/pokeapi.png"
import facebook from "../assets/imgs/login_facebook.png"
import gamesnake from "../assets/imgs/game_snake.png"
import ecommerce from "../assets/imgs/Ecommerce.png"
import cronometro from "../assets/imgs/cronometro.png"
import calculadora from "../assets/imgs/calculadora.png"


const Projects = ()=>{
    
    const imgsProjects1 = [
        {
            img: viacep,
            text: "ViaCEP é uma aplicação que busca informações de endereços no Brasil a partir de um CEP informado. Usando a API pública do ViaCEP, ele retorna dados como rua, bairro, cidade e estado, simplificando o preenchimento de formulários de endereço e proporcionando uma experiência de usuário mais rápida e automatizada.",
            id: 1,
        },
        {
            img: tolist,
            text: " To-Do List permite que o usuário adicione e remova tarefas de maneira intuitiva, com uma interface organizada e funcional. Além disso, o projeto utiliza o localStorage para salvar as tarefas, garantindo que elas permaneçam disponíveis mesmo após a atualização ou fechamento da página, proporcionando uma experiência prática e contínua ao usuário.",
            id: 2,
        },
        {
            img: pokeapi,
            text: "Este projeto integra a PokeAPI, uma API pública de dados Pokémon, para exibir informações detalhadas sobre diferentes Pokémon. O usuário pode procurar por um Pokémon específico pelo nome ou número, visualizando dados como tipos, habilidades, estatísticas e imagem. O projeto inclui uma interface intuitiva e responsiva, proporcionando uma navegação interativa.",
            id: 3,
        },
        {
            img: facebook,
            text: "Clone da Página de Login do Facebook - Minha Versão Esse projeto consiste em uma recriação fiel da interface de login do Facebook, construída com precisão para simular a experiência original da página, mas com a minha versão personalizada. O projeto captura os elementos visuais e de usabilidade do login oficial do Facebook, adaptando o design com uma estrutura única e visual próprio. A ideia é destacar habilidades de layout, responsividade e atenção a detalhes, refletindo um domínio do Tailwind css, HTML, e React js no front-end.",
            id: 4,
        },
    
    ]

    const imgsProjects2 = [
        {
            img: gamesnake,
            text: "Snake Game - Recriação Clássica com JavaScript Este projeto recria o clássico jogo Snake, no qual o jogador controla uma cobra que cresce conforme come frutas e evita colisões consigo mesma e com as bordas do tabuleiro. Desenvolvido com JavaScript, HTML5 e CSS, o jogo utiliza lógica baseada em grids, eventos de teclado e um loop de animação para o movimento contínuo da cobra.",
            id: 5,
        },
        {
            img: ecommerce,
            text: "Este projeto é uma plataforma de e-commerce focada na venda de relógios, desenvolvida com um front-end moderno. O site permite aos usuários explorar um catálogo detalhado de produtos, com descrições e imagens atraentes. A funcionalidade de carrinho possibilita adicionar e remover relógios, mantendo o controle dos itens desejados. Sem integração de pagamento, o foco é em proporcionar uma experiência de navegação fluida e intuitiva, simulando a dinâmica de um e-commerce real.",
            id: 6,
        },
        {
            img: cronometro,
            text: "Projeto de cronômetro desenvolvido com React, permitindo iniciar, parar e resetar a contagem do tempo. Utiliza hooks como useState e useEffect para gerenciar o estado e garantir a atualização precisa do tempo em tela, oferecendo uma interface simples e funcional.",
            id: 7,
        },
        {
            img: calculadora,
            text: "calculadora desenvolvido com React, capaz de realizar as operações matemáticas básicas como adição, subtração, multiplicação e divisão. A interface é interativa, permitindo ao usuário inserir números e operadores, com a funcionalidade de exibir o resultado das expressões em tempo real.",
            id: 8,
        },
    ]

    return(
        <section className="
         w-full min-h-dvh
        ">
        <h4 className="
         text-center py-4 text-2xl font-poppins-semibold text-text
         capitalize
        ">
            projetos
        </h4>

        <div className="
         w-full max-w-contain min-h-full m-marginceltralize p-4
        border my-4 flex items-center justify-center overflow-hidden
        ">
            {/* {imgsProjects1.map(()=>(
                
            ))} */}
           <div className="
            min-w-full h-full flex flex-col gap-8
           ">
               <div className="
                w-full h-full flex flex-col items-center 
                gap-2 justify-center
               ">
                   <div className="
                    w-full h-full 
                   ">
                       <img src={viacep} alt="img" className="
                        object-cover object-center w-full
                       "/>
                   </div>
                   <p className="
                      text-left font-poppins capitalize text-lg text-text
                   ">
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                     Ratione, dolores ex laborum repudiandae accusamus magni, 
                     dicta alias praesentium, voluptas sunt mollitia fugit odit. 
                     Reiciendis nisi accusantium odio sapiente commodi quam.
                   </p>
               </div>

               <div className="
                 w-full h-full flex justify-between
               ">
                  <div>
                      <FaArrowCircleLeft/>
                      <FaArrowCircleRight/>
                  </div>
                  <div>
                    <a href="#">
                        <button>
                            previa
                        </button>
                    </a>
                    <a href="#">
                        <button>
                            repositorio
                        </button>
                    </a>
                  </div>
                  <div>
                     <button>Techs</button>
                  </div>
               </div>
           </div>
        </div>

        </section>
    )
}

export default Projects