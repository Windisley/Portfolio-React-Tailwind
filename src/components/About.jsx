import foto34 from "../assets/imgs/perfil34.png"
import { FaWhatsapp } from "react-icons/fa";

const About = ()=>{




    return(
        <section className="
        w-full min-h-dvh flex justify-center
        items-center border-t border-dashed border-text
        " id="about">
            <div className="
             max-w-contain h-full p-4 flex
             justify-between items-center gap-4
             moba:flex-col desktop:flex-row 
             
            " >  
                <div className="
                w-[315px] min-w-40 h-[315px] min-h-40 rounded-full border-2 
                 border-secundary bg-primary flex justify-center items-center
                 relative overflow-hidden 
                ">
                    <img src={foto34} alt="Minha Foto" className="
                      w-full h-full 
                      object-cover object-[0%34%]
                    " loading="lazy"/>
                </div>
                <div className="
                 desktop:w-2/4 h-full flex flex-col gap-4 justify-center
                 items-center  moba:my-10 moba:w-full
                ">
                    <h2 className="
                     text-center font-poppins-semibold  text-text uppercase text-2xl
                    ">
                        Sobre mim
                    </h2>

                    <p className="
                     text-left w-full font-poppins text-text capitalize
                    ">
                        Olá, sou um desenvolvedor de landing pages profissionais com mais de 2 anos no mercado
                        <br /> <br />
                        Uso tecnologias atuais para
                        construir sua landing page e tenho conhecimento em SEO para ranquear seu site de forma eficaz

                        <br /> <br />
                        além de criar uma <span className="font-poppins-semibold">landing page de alta conversão</span> com apenas um clique.
                        Também sou responsável pela <span className="font-poppins-semibold">hospedagem</span>, configuração de 
                         <span className="font-poppins-semibold"> domínio</span> e otimização de <span className="font-poppins-semibold">SEO</span> para garantir que seu site tenha a melhor performance.
                         
                         <br /><br />
                         Vamos juntos tirar seu projeto do papel e construir algo incrível!
                    </p>

                    <a href="https://wa.me/5531995210110" target="blank_" className="
                moba:w-64 tablet:w-80 desktopxl:w-80  text-primary py-2 
                  flex justify-center border-primary border rounded-lg
                  hover:shadow-shadowdark bg-secundary duration-300 ease-in-out 
                  text-center relative
                  
              "title="Whatsapp">

                <button className="
                    
                 ">

                  Fazer Orçamento

                </button>

                <FaWhatsapp className="
                 text-primary text-2xl absolute
                 right-2
                "/>
              </a>

                </div>

            </div>
        </section>
    )
}

export default About