import VideoModal from "./VideoModal"
const Panel_3 = ()=>{
    const mockLoader = ()=>{
        return [1,2,3,5,6]
    }

    return (
        <div className=" fixed top-0 w-full h-full bg-black p-1 animate-panel-2 origin-[50%_50%_-730px] [animation-timeline:scroll()] m-0 ">
                    
                    <div className="w-full h-full place-items-center grid grid-cols-2 grid-rows-3 gap-1" >
                        <h1 className="text-9xl text-white place-self-center order-4 font-poiret">Video</h1>
                        
                        
                        {mockLoader().map((num)=> <VideoModal num={num} key={num} />)}
                    </div>
        </div>
    )
}

export default Panel_3;