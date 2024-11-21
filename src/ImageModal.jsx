import { useState } from 'react'
import { CloseButton, Dialog, DialogPanel } from '@headlessui/react'

const ImageModal = ({thumbnail, images, order})=>{
    const [isOpen, setIsOpen] = useState(false)

    function open() {
        setIsOpen(true)
      }
    
    function close() {
    setIsOpen(false)
    }

    const mockLoader = ()=>{
        return images.slice(0,images.length)
    }

    const mockLoader2 = ()=>{
        return images.slice(images.length)
    }

    return (<>
        <div onClick={open} className={` overflow-hidden flex justify-center items-center h-full w-full hover:scale-105 duration-300 hover:z-50`} style={{order:order}}>
            <img src={thumbnail} className=" shrink-0 min-w-full min-h-full object-cover"/>
            
        </div>
        <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none w-screen h-screen" onClose={close}>
            <DialogPanel
            className="w-full h-full bg-white/50 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
                <CloseButton className="text-white bg-black h-10 w-10 z-30 sticky">✕</CloseButton>
                
                <div className="fixed inset-0 w-full overflow-x-auto p-4">
                    <div className="grid grid-rows-2 gap-4 h-full">
                        <div className=' flex flex-row'>
                            {mockLoader().map((p)=> <img src={p} key={p} className="h-full  mx-2"/>)}
                        </div>
                        <div className=' flex flex-row'>
                            {mockLoader2().map((p)=> <img src={p} key={p} className="h-full mx-2"/>)}
                        </div>
                    </div>
                </div>

            </DialogPanel>
        </Dialog>
        </>
    )
}

export default ImageModal;