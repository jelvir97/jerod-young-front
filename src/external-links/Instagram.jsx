import InstagramSVG from "../assets/instagram.svg"

const Instagram = ()=>{
    return (
        <a href="https://www.instagram.com/jrod.visuals/" target="_blank" rel="noopener noreferrer"> <img src={InstagramSVG} id="instagram" className="h-14 invert duration-300 hover:invert-0 hover:scale-110 rounded-xl hover:bg-yellow-300 p-3"/></a>
        )
}

export default Instagram;