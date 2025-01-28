import { useRef, useEffect } from "react";

import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
// import { FaWhatsappSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import bookImg from "../assets/imgs/book.png"
import computerImg from "../assets/imgs/computer.png"
import spriteHuman from "../assets/imgs/sprites_human.png"

const Home = () => {
  const Canvas = useRef()
  const boxCanvas = useRef()
  let angle = 0

  useEffect(() => {
    
  
    const canvas = Canvas.current;
    const containCanvas = boxCanvas.current;
    const ctx = canvas.getContext("2d");

    canvas.width = containCanvas.offsetWidth;
    canvas.height = containCanvas.offsetHeight;
    

    const screenElements = {
      screenX: canvas.width / 2,
      screenY: canvas.height / 2,
      objects: canvas.height / 4,
      person: -50,
      sprite: 0,
    };

    const positionElements = parseInt(canvas.width / 3)

    const divisionElements = {
      one: positionElements,
      two: positionElements * 2,
    };

    let animationId;

    const loadImages = async () => {
      const book = new Image();
      const computer = new Image();
      const human = new Image();

      await Promise.all([
        new Promise((resolve) => {
          human.src = spriteHuman;
          human.onload = resolve;
        }),
        new Promise((resolve) => {
          computer.src = computerImg;
          computer.onload = resolve;
        }),
        new Promise((resolve) => {
          book.src = bookImg;
          book.onload = resolve;
        }),
      ]);

      class Animation {
        constructor(ctx) {
          this.ctx = ctx;
          this.spriteWidth = human.width / 6;
          this.spriteHeight = human.height / 5;
          this.count = 0;
          this.speed = 1.8;
          this.lastUpdateTime = 0;
          this.frameDelay = 180; 
          this.DrawAnimation();
        }


        DrawAnimation = (timestamp = 0) => {
          this.ctx.clearRect(0, 0, canvas.width, canvas.height);
         
          screenElements.person += this.speed;

          if (timestamp - this.lastUpdateTime > this.frameDelay) {
            this.count = (this.count + 1) % 3;
            this.lastUpdateTime = timestamp;
          }
          
          
          
          this.ctx.drawImage(
            human,
            this.spriteWidth * this.count,
            33,
            this.spriteWidth,
            this.spriteHeight,
            screenElements.person,
            screenElements.screenY,
            50,
            50
          );
          
       
          this.ctx.drawImage(
            computer,
            divisionElements.one,
            screenElements.objects,
            80,
            80
          );
          this.ctx.drawImage(
            book,
            divisionElements.two,
            screenElements.objects,
            80,
            80
          );

     
          if (screenElements.person + 50 > canvas.width) {
            screenElements.person = -50;
          }
          
          this.ctx.beginPath()
          this.ctx.lineWidth = 5
          this.ctx.arc(screenElements.screenX, screenElements.screenY * 1.7, 40,0,Math.PI*2,false,)
          this.ctx.stroke()

          const orbitRadius = 40;
          const ballX = screenElements.screenX + orbitRadius * Math.cos(angle);
          const ballY = screenElements.screenY * 1.7 + orbitRadius * Math.sin(angle);
      
          // Desenhar a bolinha
          this.ctx.beginPath();
          this.ctx.arc(ballX, ballY, 8, 0, Math.PI * 2, false);
          this.ctx.fillStyle = '#f2ca52';
          this.ctx.fill();
      
          
          angle += 0.03;
          
   
          
      
        animationId =  requestAnimationFrame(this.DrawAnimation);
          
        };

      }

      new Animation(ctx);
    };

    loadImages();
    return ()=>{
      cancelAnimationFrame(animationId)
    }
  }, []);




  return (
    <section className="
       w-full min-h-dvh flex justify-center
       items-center my-8 relative overflow-hidden
      " id="home">


      <div className="
       fixed right-2 bottom-2 z-50 
      ">
        <a href="https://wa.me/5531995210110" target="blank_">
          <FaWhatsapp className="
           text-primary text-5xl
            hover:text-black
           ease-in-out duration-300
          "/>
        </a>
      </div>              

      <div className="
          w-full max-w-contain min-h-dvh
          flex justify-center items-center moba:my-6
          desktop:my-0
          m-[0 auto] relative
          ">
        <div
          className="
              flex justify-between items-center w-full
             h-full max-w-contain  px-4 moba:flex-col desktopxl:flex-row
             gap-4
             "
        >
          <div className="
                 flex flex-col gap-6
                 justify-center items-center
                ">
            
            <div className="
             w-full h-full flex justify-center
             flex-col gap-2
             moba:items-center desktopxl:items-start
             
            ">
             
             <div className="
             moba:w-full desktopxl:w-4/5 flex items-center
             moba:justify-center desktopxl:justify-start
             ">
             <p className="
              text-left capitalize
              font-poppins-semibold
              text-text 
             ">
             windisley dev
             </p>

             </div>
            
            <div className="
             moba:w-full tablet700:w-4/5 flex items-center
             moba:justify-center desktopxl:justify-left
            ">
            <h1 className="
                       font-poppins-semibold text-2xl 
                        text-text desktopxl:text-left
                        moba:text-center
                        uppercase
                   ">
              Aumente suas conversões com uma landing page profissional
            </h1>

            </div>
            
            <div className="
             moba:w-full desktopxl:w-4/5 flex items-center
             moba:justify-center desktopxl:justify-start
            ">
            <p className="
              text-center capitalize
             font-poppins-semibold
             text-text 
            ">
            faço landing pages de alta conversão 
            </p>

            </div>
            </div>

            <div className="
                      flex flex-col gap-4 w-full 
                   ">
       

              <div className="
                       flex items-end gap-4 moba:justify-center desktopxl:justify-start
                      ">
                <a href="https://www.linkedin.com/in/windisley-lima-ab9447221/" target="blank" title="Linkedin">
                  <FaLinkedin className="
                            text-5xl text-secundary hover:shadow-shadowdark
                            border border-transparent rounded-lg duration-300 ease-in-out
                    " aria-label="Linkedin"/>
                </a>
                <a href="https://github.com/Windisley" target="blank" title="Github">
                  <FaGithubSquare className="
                            text-5xl text-secundary hover:shadow-shadowdark
                            border border-transparent rounded-lg duration-300 ease-in-out
                    " aria-label="Github"/>
                </a>
                
              </div>
              

               <div className="
               w-full flex flex-col moba:justify-center  items-center
               desktopxl:items-start gap-4
               "> 
              <a href="https://github.com/Windisley/Curriculo-Front-End/raw/main/Front_End.pdf" className="
                moba:w-64 tablet:w-80 desktopxl:w-80 bg-secundary text-primary py-2 
                  flex justify-center border-primarydark border rounded-lg
                  hover:shadow-shadowdark duration-300 ease-in-out 
                  text-center
                  
              "title="Curriculo"  download="Curriculo_Windisley_Lima.pdf">

                <button className="
                    
                 ">

                  Baixar CV


                </button>

                
              </a>

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

          </div>

          <div className="
           moba:w-full desktopxl:w-2/4 min-h-96 p-4  flex
           items-center justify-center flex-col 
          " ref={boxCanvas }>
            <canvas ref={Canvas} className="border bg-gray rounded-lg">
              <h1>
                Seu Browser não suporta o canvas mude de navegador
              </h1>
            </canvas>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Home