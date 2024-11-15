import LinkedIn from "./external-links/LinkedIn";
import Instagram from "./external-links/Instagram";
import Youtube from "./external-links/Youtube";

const Panel_5 = ()=>{
    return (
        <div className=" fixed top-0 w-full h-full bg-black  animate-panel-5 origin-[50%_50%_-730px] [animation-timeline:scroll()] m-0 ">
                <div className="w-full h-full relative">
                    <div className="fixed left-[50%] top-[25%] text-white h-full">
                        <h1 className="font-poiret  text-7xl mb-3">Have a project?</h1>
                        <h1 className="font-aleo-italic  text-3xl" >Let's grab a coffee and see if i'm the right guy for it. </h1>
                        <div className=" flex justify-evenly mt-8 animate-links [animation-timeline:scroll()] absolute w-full">
                            <LinkedIn />
                            <Instagram />
                            <Youtube />         
                         </div>
                    </div>
                    
                    <img src="src/assets/jerod_bg_contact.png" className=""/>
                </div>
        </div>
    )
}

export default Panel_5;