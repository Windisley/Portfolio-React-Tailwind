import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <footer className="
         w-full min-h-full p-4 border border-gray
         bg-secundary
        ">
            <div className="
             w-full max-w-contain h-full m-marginceltralize
             flex justify-between items-center gap-2
            ">
            <div>
                <p className="
                 capitalize font-poppins-italic text-primary
                 text-sm
                ">
                    windisley lima moreira copyright@{year}
                </p>
            </div>
            <div>
                <div className="
                 flex gap-4 items-center justify-center
                ">
                    <a href="https://www.linkedin.com/in/windisley-lima-ab9447221/" target="blank">
                        <FaLinkedin className="
                         text-primary text-3xl hover:text-primarydark
                         hover:shadow-shadowligth border-transparent
                         duration-300 ease-in-out
                        " aria-label="Linkedin"/>
                    </a>
                    <a href="https://github.com/Windisley" target="blank">
                        <FaGithubSquare className="
                         text-primary text-3xl hover:text-primarydark
                         hover:shadow-shadowligth border-transparent
                         duration-300 ease-in-out
                        " aria-label="Github"/>
                    </a>

                    <a href="https://wa.me/31995210110" target="_blank">
                        <FaWhatsappSquare className="
                         text-primary text-3xl hover:text-primarydark
                         hover:shadow-shadowligth border-transparent
                         duration-300 ease-in-out
                        " aria-label="WhatsApp"/>
                    </a>
                </div>

            </div>
            </div>
        </footer>
    )
}

export default Footer