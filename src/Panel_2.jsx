import ImageModal from "./ImageModal"

import JerodPhoto from "./assets/jerod_bg_photo.png"

import Image1 from "./assets/photos-pueblo/image-1.jpg"
import Image2 from "./assets/photos-pueblo/image-2.jpg"
import Image3 from "./assets/photos-pueblo/image-3.jpg"
import Image4 from "./assets/photos-pueblo/image-4.jpg"
import Image5 from "./assets/photos-pueblo/image-5.jpg"
import Image6 from "./assets/photos-pueblo/image-6.jpg"
import Image7 from "./assets/photos-pueblo/image-7.jpg"
import Image8 from "./assets/photos-pueblo/image-8.jpg"
import Image9 from "./assets/photos-pueblo/image-9.jpg"
import Image10 from "./assets/photos-pueblo/image-10.jpg"
import Image11 from "./assets/photos-pueblo/image-11.jpg"

const Panel_2 = ()=>{
    const thumbnails = [Image1, Image2, Image3, Image4, Image5, Image6];

    const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10, Image11]

    return (
        <div className=" fixed top-0 w-full h-full bg-black p-1 animate-panel-3 origin-[50%_50%_-730px] [animation-timeline:scroll()] m-0 ">
                    
                    <div className=" w-full h-full place-items-center grid grid-cols-4 grid-rows-3 gap-1" >
                        
                        
                        <div className="w-full h-full  col-span-2 row-span-3 place-self-center order-0 p-1 relative grid grid-cols-2 grid-rows-3 ">
                            <div className=" order-3 row-span-2 overflow-hidden flex justify-center items-center h-full w-full">
                                <img src={JerodPhoto} className="shrink-0 min-w-full min-h-full object-cover "/>
                            </div>
                            <h1 className="text-9xl text-white  place-self-center col-span-2 font-poiret order-0 z-10" >Photography </h1>
                            <p className=" text-white text-justify text-2xl font-aleo-italic z-10">
                                As a photographer, I've discovered an incredible joy in creating an environment where people feel entirely at ease in their own skin. I find the remarkable opportunity to make individuals feel not only comfortable but truly celebrated in every captured moment.
                            </p>
                        </div>

                        {thumbnails.map((thumbnail,idx)=> <ImageModal order={idx} key={idx} images={images} thumbnail={thumbnail}/>)}
                    </div>
        </div>
    )
}

export default Panel_2;