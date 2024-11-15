import { useState } from 'react'
import { CloseButton, Dialog, DialogPanel } from '@headlessui/react'

const ImageModal = ({imgNum})=>{
    const [isOpen, setIsOpen] = useState(false)

    function open() {
        setIsOpen(true)
      }
    
    function close() {
    setIsOpen(false)
    }

    const mockLoader = ()=>{
        return [1,2,3,4,5,6,7,8,9]
    }

    const mockLoader2 = ()=>{
        return [10,11,12,13,14,15,16,17]
    }

    return (<>
        <div onClick={open} className={` overflow-hidden flex justify-center items-center h-full w-full hover:scale-105 duration-300 hover:z-50`} style={{order:imgNum}}>
            <img src={`src/assets/photos-pueblo/image-${imgNum}.jpg`} className=" shrink-0 min-w-full min-h-full object-cover"/>
            
        </div>
        <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none w-screen h-screen" onClose={close}>
            <DialogPanel
            className="w-full h-full bg-white/50 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
                <CloseButton className="text-white bg-black h-10 w-10 z-30 sticky">✕</CloseButton>
                
                <div className="fixed inset-0 w-full overflow-x-auto p-4">
                    <div className="grid grid-rows-2 gap-4 h-full">
                        <div className=' flex flex-row'>
                            {mockLoader().map((num)=> <img src={`src/assets/photos-pueblo/image-${num}.jpg`} className="h-full  mx-2"/>)}
                        </div>
                        <div className=' flex flex-row'>
                            {mockLoader2().map((num)=> <img src={`src/assets/photos-pueblo/image-${num}.jpg`} className="h-full mx-2"/>)}
                        </div>
                    </div>
                </div>

            </DialogPanel>
        </Dialog>
        </>
    )
}

export default ImageModal;