import foto34 from "../assets/imgs/perfil34.png"

const About = ()=>{
    return(
        <section className="
        w-full min-h-dvh flex justify-center
        items-center border-t border-text
        " id="about">
            <div className="
             max-w-contain h-full p-4 flex
             justify-between items-center gap-4
             moba:flex-col desktop:flex-row
            ">  
                <div className="
                w-72 min-w-40 h-72 min-h-40 rounded-full border-2 
                 border-secundary bg-primary flex justify-center items-center
                 relative overflow-hidden shadow-shadowligth
                ">
                    <img src={foto34} alt="Minha Foto" className="
                      absolute left-2/4 top-2/4
                      translate-x-centralizeEixo
                      translate-y-centralizeEixo
                      object-contain
                      w-full 
                    " loading="lazy"/>
                </div>
                <div className="
                 desktop:w-2/4 h-full flex flex-col gap-4 justify-center
                 items-center  moba:my-8 moba:w-full
                ">
                    <h2 className="
                     text-center font-poppins-semibold text-xl text-text capitalize
                    ">
                        Sobre mim
                    </h2>

                    <p className="
                     text-left w-full font-poppins text-text capitalize
                    ">
                        Olá! Sou um desenvolvedor Front-end especializado em transformar 
                        ideias em experiências digitais de alta qualidade. 
                        <br /> <br />
                        Com conhecimentos atualizados sobre as tecnologias e práticas modernas do mercado, ofereço soluções personalizadas para <strong>blogs, e-commerces, landing pages</strong> e muito mais.
                        <br /> <br />
                         Minha prioridade é criar interfaces intuitivas e visualmente atraentes, focando na melhor experiência para os usuários e no alinhamento com os objetivos do cliente.
                         <br /><br /> 
                        Vamos juntos tirar seu projeto do papel e construir algo incrível!
                    </p>
                </div>

            </div>
        </section>
    )
}

export default About