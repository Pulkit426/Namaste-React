import { LOGO_URL } from "../utils/constants"

const Header = () => {
    return (
        <div className="header">
            <img src={LOGO_URL} className="logo" />
            
            <nav className="nav-links">
                <ul>
                    <li> Home </li>
                    <li> About </li>
                    <li> Cart </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header