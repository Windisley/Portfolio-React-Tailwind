import { useRef, useEffect } from "react";

import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
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
       items-center
      ">               

      <div className="
          w-full max-w-contain min-h-dvh
          flex justify-center items-center
        ">
        <div
          className="
              flex justify-between items-center w-full
             h-full max-w-contain  px-4 moba:flex-col desktopxl:flex-row
             gap-4
             "
        >
          <div className="
                 flex flex-col gap-8
                ">
            <h1 className="
                       font-poppins-semibold text-2xl 
                        text-text moba:text-center desktopxl:text-start
                   ">
              Windiley Lima Desenvolvedor Front end
            </h1>

            <div className="
                      flex flex-col gap-4 w-full 
                   ">
              <p className="
                         text-xl capitalize text-text moba:text-center desktopxl:text-start
                      ">
                vamos conversar?
              </p>

              <div className="
                       flex items-end gap-4 moba:justify-center desktopxl:justify-start
                      ">
                <a href="#" title="Linkedin">
                  <FaLinkedin className="
                            text-4xl text-secundary hover:shadow-shadowdark
                            border border-transparent rounded-lg duration-300 ease-in-out
                    " aria-label="Linkedin"/>
                </a>
                <a href="#" title="Github">
                  <FaGithubSquare className="
                            text-4xl text-secundary hover:shadow-shadowdark
                            border border-transparent rounded-lg duration-300 ease-in-out
                    " aria-label="Github"/>
                </a>
                <a href="#" title="WhatsApp">
                  <FaWhatsappSquare className="
                            text-4xl text-secundary hover:shadow-shadowdark
                            border border-transparent rounded-lg
                            duration-300 ease-in-out
                        " aria-label="WhatsApp"/>
                </a>
              </div>
              

               <div className="
               w-full flex moba:justify-center  items-center
               desktopxl:justify-start
               "> 
              <a href="#" className="
                moba:w-64 tablet:w-80 desktopxl:w-80 bg-secundary text-primary py-2 
                  flex justify-center border-primarydark border rounded-lg
                  hover:shadow-shadowdark duration-300 ease-in-out 
                  text-center
                  
              "  title="Curriculo" download={"file:///C:/Users/Windisley/Documents/curriculo/Front_End.pdf"}>

                <button className="
                    
                 ">

                  Baixar CV

                </button>
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