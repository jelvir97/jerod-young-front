const Panel_4 = ()=>{
    return(
        <div className="fixed top-0 w-full h-full bg-black p-1 animate-panel-4 origin-[50%_50%_-730px] [animation-timeline:scroll()] m-0">
            <div className=" w-full h-full grid grid-cols-2 content-center">
                <div className="p-12">
                    <h1 className=" text-7xl font-poiret text-white text-center mb-5">Who Am I?</h1>
                    <p className=" font-aleo-italic text-white text-2xl text-justify">
                        As a self-taught filmmaker, my journey is fueled by a passion for storytelling that carries deep meaning. Since 2017, I've immersed myself in the world of video creation, personally delving into the roles of a director, cinematographer, editor, and social media specialist. What captivates me about this craft is the ability to listen to a story and then transform it into a compelling narrative that resonates with an audience, forging a meaningful connection through the art of visual storytelling.
                    </p>
                </div>
                <div className=" h-[80vh] relative">
                    <img src="src/assets/About-1.png" className=" h-[50vh] absolute top-5 right-28 z-10"/>
                    <img src="src/assets/About-2.jpg" className=" h-[80vh] absolute"/>
                    <img src="src/assets/About-3.JPG" className=" h-[30vh] absolute -bottom-5 right-24 z-20"/>
                </div>
            </div>
        </div>

    )
}

export default Panel_4;