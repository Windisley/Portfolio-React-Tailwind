const Header = () => {
    return (
        <header className="w-full min-h-full  bg-secundary flex justify-center">
            
            <div className=" w-full max-w-contain flex items-center 
            justify-between px-4" >
            <p className="
             font-poppins uppercase text-primary cursor-pointer
            ">
                windisley dev
            </p>

            <div>
                <canvas width="100" height="100">

                </canvas>
            </div>

            <nav>
                <ul className="
                 flex gap-6 items-center
                ">
                    <li className="
                     text-primary capitalize font-poppins
                     hover:translate-y-y5 duration-300 ease-out
                    ">
                        <a href="#">

                            inicio
                        </a>
                    </li>
                    <li className="
                     text-primary capitalize font-poppins
                     hover:translate-y-y5 duration-300 ease-out
                    ">
                        <a href="#">

                            sobre mim
                        </a>
                    </li>
                    <li className="
                     text-primary capitalize font-poppins
                     hover:translate-y-y5 duration-300 ease-out
                    ">
                        <a href="#">
                            habilidades

                        </a>
                    </li>
                    <li className="
                     text-primary capitalize font-poppins
                     hover:translate-y-y5 duration-300 ease-out
                    ">
                        <a href="#">
                            projetos
                        </a>
                    </li>
                </ul>
            </nav>

            </div>
        </header>
    )
}

export default Header