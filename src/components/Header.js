import { LOGO_URL } from "../utils/constants"
import { useState } from "react"

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
        <div className="header">
            <img src={LOGO_URL} className="logo" />
            
            <nav className="nav-links">
                <ul>
                    <li> Home </li>
                    <li> About </li>
                    <li> Contact </li>
                    <li> Cart </li>
                </ul>
            </nav>

            { isLoggedIn ?  
            <button className="logout-btn" onClick={() => setIsLoggedIn(false)}> Logout </button> : 
            <button className="login-btn" onClick={() => setIsLoggedIn(true)}> Login </button>}
        </div>
    )
}

export default Header