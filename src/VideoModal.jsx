import { useState } from 'react'
import { CloseButton, Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import YouTube from 'react-youtube';


const VideoModal = ({videoPath, order})=>{
    const [isOpen, setIsOpen] = useState(false)

    function open() {
        setIsOpen(true)
      }
    
    function close() {
    setIsOpen(false)
    }

    const opts = {
        height: '400',
        width: '50%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
          controls: 1
        },
      };

      const _onReady = (evt) => {
        // access to player in all event handlers via event.target
        evt.target.pauseVideo();
      }

    return (<>
        <div onClick={open} className={` overflow-hidden flex justify-center items-center h-full w-full hover:scale-105 duration-300 hover:z-50 relative`} style={{order:order}}>
            {/* <img src={`src/assets/photos-pueblo/image-${imgNum}.jpg`} className=" shrink-0 min-w-full min-h-full object-cover"/> */}
            
            <video className=" min-h-full min-w-full shrink-0 object-cover" autoPlay muted loop>
                {console.log(videoPath)}
                <source src={videoPath} type="video/mp4" />
            </video>

            <div className='flex absolute w-full h-full items-center justify-center opacity-0 hover:opacity-100 hover:bg-black/40'>
                <h1 className='text-2xl text-white '>Best Film Ever</h1>
            </div>
            
            
        </div>

        <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none w-screen h-screen" onClose={close}>
            <DialogPanel
            className="w-full h-full bg-white/50 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 grid grid-rows-2 items-center"
            >
                <div>
                    <CloseButton className="text-white bg-black h-10 w-10 z-30 mb-4">✕</CloseButton>
                    <YouTube opts={opts} videoId='rcTyffERSaw' onReady={_onReady} />
                </div>
                <div>
                    <DialogTitle>Best Film Ever</DialogTitle>
                    <Description> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eum placeat laudantium quidem molestiae dignissimos vero esse necessitatibus qui et quas, sit quis ipsa corrupti in blanditiis minus, nostrum soluta!</Description>
                    
                </div>
            
            </DialogPanel>
        </Dialog>

        </>
    )
}

export default VideoModal;        

