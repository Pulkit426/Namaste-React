import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header">
      <img src={LOGO_URL} className="logo" />

      <nav className="nav-links">
        <ul>
          <li>
            {" "}
            <Link to="/"> Home </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/about"> About </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/contact"> Contact </Link>{" "}
          </li>
          <li> Cart </li>
        </ul>
      </nav>

      {isLoggedIn ? (
        <button className="logout-btn" onClick={() => setIsLoggedIn(false)}>
          {" "}
          Logout{" "}
        </button>
      ) : (
        <button className="login-btn" onClick={() => setIsLoggedIn(true)}>
          {" "}
          Login{" "}
        </button>
      )}
    </div>
  );
};

export default Header;
