import LinkedIn from "./external-links/LinkedIn";
import Instagram from "./external-links/Instagram";
import Youtube from "./external-links/Youtube";

import ArrowDown from "./assets/arrow-down.svg"
import JerodLogo from "./assets/jerod_logo.png"

const Panel_1 = () => {
  return (
    <div className=" fixed top-0 w-full h-full grid bg-black animate-panel-1 origin-[50%_50%_-730px] [animation-timeline:scroll()] m-0 ">
        <video className=" min-h-full min-w-full h-auto w-auto opacity-85 -z-10" autoPlay muted loop>
          <source src="src/assets/2023-Webstie-Banner-v1-Handbrake.mp4" type="video/mp4" />
        </video>
    
      <div className="h-full  p-8 text-white font-aleo-italic place-self-center self-center align-middle w-2/3">
        <img src={JerodLogo} className=""/>
        <h1 className=" text-xl text-white text-center my-6">
          A Dependable Creative with 5 + Years of experience, skilled as a Cinematographer and  Photographer. Specialize in short form storytelling and have surpassed millions of views through social media content. Created over one thousand videos for individuals and business which has resulted in over $1M Revenue.
        </h1>
        <div className=" flex justify-evenly">
            <LinkedIn />
            <Instagram />
            <Youtube />        
        </div>

        <div className="flex flex-col mt-16">
            <h1 className=" text-white text-xl text-center mb-5">Scroll Down</h1>
            <img src={ArrowDown} className="h-7 invert animate-bounce"/>
        </div>
      </div>
      
    </div>
  );
};

export default Panel_1;