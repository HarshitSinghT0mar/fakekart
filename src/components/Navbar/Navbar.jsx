// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Navbar.scss";
import { useCartContext } from "../../contexts/CartContext";

const Navbar = () => {
  const { cartItems } = useCartContext();
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Fakestore</Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/cart" >
          <div className="cart-icon">
            <ShoppingCartIcon />
            {cartItems.length!==0&&<span>{cartItems.length}</span>}
          </div>
        </Link>
        <Link to="login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
