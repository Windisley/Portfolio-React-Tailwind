import foto34 from "../assets/imgs/perfil34.png"

const About = ()=>{
    return(
        <section className="
        w-full min-h-dvh flex justify-center
        items-center
        ">
            <div>  
                <div>
                    <img src={foto34} alt="Minha Foto" />
                </div>
                <div>
                    <h2>
                        Sobre mim
                    </h2>

                    <p>
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