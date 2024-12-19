import { Link } from "react-router-dom"
import { IoShapes, /* IoShapesOutline */ } from "react-icons/io5"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa" 

const Footer = () => {
    return (
        <footer>

            <div className="listItems">
                {/* <div className="IoShapesDiv">
                    
                    { isDarkMode ? <IoShapes className="IoShapes"/> 
                        : <IoShapesOutline className="IoShapesOutline" />}
                </div> */}

                <ul className="navUl">
                    <li><IoShapes className="IoShapes"/></li>
                    <li className="listItem"><Link to={"/"} >HOME</Link></li>
                    <li className="listItem"><Link to={"project"} >PROJECT</Link></li>
                    <li className="listItem"><Link to={"contact"} >CONTACT ME</Link></li>
                </ul>
            </div>

            <ul className="socialIcons">
                <li>
                    <a href="https://github.com/nnamdiCodes" target="_blank" rel="noopener noreferrer"> 
                        <FaGithub className="icon"/> 
                    </a>
                </li>
                <li>
                    <a href="https://ng.linkedin.com/in/anih-victor-nnamdi-1950b7255" target="_blank" rel="noopener noreferrer">
                         <FaLinkedin className="icon"/> 
                    </a>
                </li>
                <li>
                    <a href="https://x.com/anih_zamani?s=11" target="_blank" rel="noopener noreferrer">
                         <FaTwitter className="icon"/>
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer