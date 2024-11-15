import ImageModal from "./ImageModal"

const Panel_2 = ()=>{
    const mockLoader = ()=>{
        return [1,2,3,4,5,6]
    }

    return (
        <div className=" fixed top-0 w-full h-full bg-black p-1 animate-panel-3 origin-[50%_50%_-730px] [animation-timeline:scroll()] m-0 ">
                    
                    <div className=" w-full h-full place-items-center grid grid-cols-4 grid-rows-3 gap-1" >
                        
                        
                        <div className="w-full h-full  col-span-2 row-span-3 place-self-center order-0 p-1 relative grid grid-cols-2 grid-rows-3 ">
                            <div className=" order-3 row-span-2 overflow-hidden flex justify-center items-center h-full w-full">
                                <img src="src/assets/jerod_bg_photo.png" className="shrink-0 min-w-full min-h-full object-cover "/>
                            </div>
                            <h1 className="text-9xl text-white  place-self-center col-span-2 font-poiret order-0 z-10" >Photography </h1>
                            <p className=" text-white text-justify text-2xl font-aleo-italic z-10">
                                As a photographer, I've discovered an incredible joy in creating an environment where people feel entirely at ease in their own skin. I find the remarkable opportunity to make individuals feel not only comfortable but truly celebrated in every captured moment.
                            </p>
                        </div>

                        {mockLoader().map((num)=> <ImageModal imgNum={num} key={num} />)}
                    </div>
        </div>
    )
}

export default Panel_2;