import { Link } from "react-router-dom"
/* import { FiSun, FiMoon } from 'react-icons/fi' */
/* import { FaToggleOff, FaToggleOn } from 'react-icons/fa' */
import { IoShapes, IoShapesOutline } from "react-icons/io5"

const Header = ({ /* isDarkMode */ /* handleClick */ toggleMenu, isActive }) => {
    return (
        <header className="header">
            <section className="header__logo-line">
                <div className="header__icon">
                    <IoShapes className="IoShapes"/>
                </div>

                {/* <div className="nav__toggleBtn" onClick={handleClick}>
                    {
                        isDarkMode ? <FaToggleOff className="FaToggleOff"/> 
                            : <FaToggleOn className="FaToggleOn"/>
                    }
                </div> */}

                <button className="header__menuBtn" onClick={toggleMenu}>
                        <div className={`menuIcon ${isActive ? 'active' : ''}`}>
                        </div>
                </button>
            </section>
            
            <nav className={`nav ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
                <ul>
                    <li><Link to={"/"} >HOME</Link></li>
                    <li><Link to={"project"} >PROJECT</Link></li>
                    <li><Link to={"contact"} ><span className='noWrap'>CONTACT ME</span></Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header