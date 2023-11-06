import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div className="desktopMode d-flex flex-row justify-content-between align-items-center px-5 py-2 ">
          
          <div className="logoContainer">
            <Link to="#">Sinbit Trades</Link>
          </div>

          <nav className="">
            <Link to="">Home</Link>
            <Link to="">Pages</Link>
            <Link to="">Portfolio</Link>
            <Link to="">Features</Link>
            <Link to="">Blog</Link>
            <Link to="">Purchase</Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
