import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="header">
    <nav>
      <Link to="/">Home</Link>
      <Link to="/wishlist">Wishlist</Link>
    </nav>
  </header>
);

export default Header;
