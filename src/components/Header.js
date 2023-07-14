import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { user, setUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-orange-300 p-2 mb-3 shadow-lg">
      <img data-testid="logo" src={LOGO_URL} className="h-20 m-2 p-2" />

      <nav className="nav-links">
        <ul className="flex m-5">
          <li className="p-2">
            {" "}
            <Link to="/"> Home </Link>{" "}
          </li>
          <li className="p-2">
            {" "}
            <Link to="/about"> About </Link>{" "}
          </li>
          <li className="p-2">
            {" "}
            <Link to="/contact"> Contact </Link>{" "}
          </li>
          <Link to="/instamart">
            {" "}
            <li className="p-2"> Instamart </li>
          </Link>
          <Link to="/cart">
            {" "}
            <li className="p-2" data-testid="cart">
              Cart - {cartItems.length}
            </li>{" "}
          </Link>
        </ul>
      </nav>

      <h3 className="p-2 m-5 font-bold text-cyan-800">
        {" "}
        {user.name ? user.name + " logged in" : "No User logged in"}
      </h3>

      {isLoggedIn ? (
        <button
          className="logout-btn"
          onClick={() => {
            setIsLoggedIn(false);
            setUser({
              name: null,
              email: null,
            });
          }}
        >
          {" "}
          Logout{" "}
        </button>
      ) : (
        <button
          data-testid="login-btn"
          className="login-btn"
          onClick={() => {
            setIsLoggedIn(true);
            setUser({
              name: "Pulkit",
              email: "pulkit_ag1@gmail.com",
            });
          }}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Header;
