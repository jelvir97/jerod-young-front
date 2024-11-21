import LinkedInSVG from "../assets/linked-in.svg"


const LinkedIn = ()=>{
    return (
        <a href="https://www.linkedin.com/in/jerodyoung/" target="_blank" rel="noopener noreferrer"> <img src={LinkedInSVG} className="h-14 invert duration-300 hover:invert-0 hover:scale-110 rounded-xl hover:bg-blue-800 p-3"/></a>
    )
}

export default LinkedIn;