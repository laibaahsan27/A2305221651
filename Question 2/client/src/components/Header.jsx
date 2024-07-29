import React from "react";
import { Link } from "react-router-dom";
// import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <Link to="/" className="logo">
            Stars
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
