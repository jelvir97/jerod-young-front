const Panel_6 = ()=>{
    return (
        <div className=" animate-panel-6 [animation-timeline:scroll()]  z-40 h-full w-2/5 flex flex-col items-center p-4 " >
            <h1 className="font-aleo-italic text-white text-3xl my-8">Send me a message!</h1>
            <div className=" z-50 opacity-100 w-full h-fit">
                <form className="flex flex-col text-center">
                    
                    <label for="email" className="text-white w-full mb-8 font-poiret text-2xl">
                        Email
                        <input type="email" id="email" name="email" className=" block w-full text-black text-xl"/>
                    </label>

                    <label className="text-white mb-8 font-poiret text-2xl">
                        Name
                        <input type="text" id="name" name="name" className=" block w-full text-black text-xl"/>
                    </label>
                    
                    <label className="text-white mb-8 font-poiret text-2xl">
                        Subject
                        <input type="text" id="subject" name="subject" className=" block w-full text-black text-xl"/>
                    </label>

                    <label className="text-white mb-8 font-poiret text-2xl">
                        Message
                        <textarea name="message" className=" block w-full text-black h-fit"></textarea>
                    </label>
                    
                    <button type="submit" 
                            className=" font-aleo-italic p-2 bg-white h-12 w-28 border border-solid text-black self-center text-2xl hover:bg-black hover:border-white hover:text-white">
                        Send
                    </button>

                </form>
            </div>
            
        </div>
    );

}

export default Panel_6;