import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex space-between item-center">
      <Link to="/" className="bold">
        BLOG
      </Link>
      <nav className="">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">SignUp</Link>
      </nav>
    </header>
  );
}

export default Header;
