import Panel_1 from "./Panel_1";
import Panel_2 from "./Panel_2";
import Panel_3 from "./Panel_3";
import Panel_4 from "./Panel_4";
import Panel_5 from "./Panel_5";
import Panel_6 from "./Panel_6";

const Home = () => {

    return (
        <div className=" fixed top-0 w-auto grid h-screen overflow-scroll snap-y snap-mandatory bg-black p-0">
            <div className=" w-screen snap-start"></div>
            <div id="cube" className="sticky top-0 flex perspective-800 h-screen w-screen place-self-center align-middle">
                <Panel_1 />
                <Panel_2 />
                <Panel_3 />
                <Panel_4 />
                <Panel_5 />
                <Panel_6 />
                <div className="fixed h-4 bg-white z-[1000px] w-full bottom-0 scroll-watcher animate-scroll-watcher [animation-timeline:scroll()] opacity-55"></div>
            </div>
            
            <div className="h-screen w-screen opacity snap-start"></div>
            
            
            
            <div className="h-screen w-screen opacity snap-start"></div>
            <div className="h-screen w-screen opacity snap-start"></div>
            <div className="h-screen w-screen opacity snap-start"></div>
            <div className="h-screen w-screen opacity snap-start"></div>

            
            {/* <div className="h-screen w-screen opacity-0 snap-center"></div>
            <div className="h-screen w-screen opacity-0 snap-center"></div> */}
        </div>
    )
}

export default Home;