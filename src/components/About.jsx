import foto34 from "../assets/imgs/perfil34.png"

const About = ()=>{
    return(
        <section className="
        w-full min-h-dvh flex justify-center
        items-center bg-secundary
        ">
            <div className="
             max-w-contain h-full p-4 flex
             justify-between items-center gap-4

            ">  
                <div className="
                w-72 min-w-40 h-72 min-h-40 rounded-full border-2 
                 border-primarydark bg-primary flex justify-center items-center
                 relative overflow-hidden shadow-shadowdark
                ">
                    <img src={foto34} alt="Minha Foto" className="
                      absolute left-2/4 top-2/4
                      translate-x-centralizeEixo
                      translate-y-centralizeEixo
                      object-contain
                      w-full 
                    "/>
                </div>
                <div className="
                 w-2/4 h-full flex flex-col gap-4 justify-center
                 items-center
                ">
                    <h2 className="
                     text-center font-poppins-semibold text-xl text-primary capitalize
                    ">
                        Sobre mim
                    </h2>

                    <p className="
                     text-left w-full font-poppins text-primary capitalize
                    ">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, ducimus est, cupiditate 
                        perspiciatis optio possimus corrupti recusandae perferendis odit doloremque fugiat aperiam deserunt! 
                        Facere quis voluptate perferendis porro ea adipisci.
                    </p>
                </div>

            </div>
        </section>
    )
}

export default About