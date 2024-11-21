import VideoModal from "./VideoModal"

import Video1 from "./assets/video-thumbnail-1.mov"
import Video2 from "./assets/video-thumbnail-2.mov"
import Video3 from "./assets/video-thumbnail-3.mov"
import Video5 from "./assets/video-thumbnail-5.mov"
import Video6 from "./assets/video-thumbnail-6.mov"


const Panel_3 = ()=>{
    const videoPaths = [Video1,Video2,Video3,Video5,Video6];

    return (
        <div className=" fixed top-0 w-full h-full bg-black p-1 animate-panel-2 origin-[50%_50%_-730px] [animation-timeline:scroll()] m-0 ">
                    
                    <div className="w-full h-full place-items-center grid grid-cols-2 grid-rows-3 gap-1" >
                        <h1 className="text-9xl text-white place-self-center order-3 font-poiret">Video</h1>
                        
                        
                        {videoPaths.map((p, idx)=> <VideoModal order={idx} key={p} videoPath={p} />)}
                    </div>
        </div>
    )
}

export default Panel_3;