import Header from "./Header"
import { Outlet } from "react-router-dom"
import Footer from "./Footer"

const Layout = ({ handleClick, isDarkMode, toggleMenu, isActive }) => {
    return (
        <div className="App">
            <Header handleClick={handleClick} 
                isDarkMode={isDarkMode}
                toggleMenu={toggleMenu}
                isActive={isActive}
            />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout