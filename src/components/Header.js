import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Fade as Hamburger } from "hamburger-react";

const Header = () => {
  const [HambergerIcon, setHambergerIcon] = useState(false);
  // console.log("HambergerIcon" , HambergerIcon )
  return (
    <>
      <header id="header">
        <div className="desktopMode d-flex flex-row justify-content-between align-items-center  py-2 ">
          <div className="logoContainer">
            <Link to="#">Sinbit Trades</Link>
          </div>

          <nav className="d-flex flex-row align-items-center">
            <div>
              {" "}
              <Link to="#">Home</Link>
            </div>
            <div>
              {" "}
              <Link to="#">Pages</Link>
            </div>
            <div>
              {" "}
              <Link to="#">Portfolio</Link>
            </div>
            <div>
              {" "}
              <Link to="#">Features</Link>
            </div>
            <div>
              {" "}
              <a href="#growthMethods">Growth Method</a>
            </div>
            <div
              id="hamburgerIcon"
              onClick={() => setHambergerIcon(!HambergerIcon)}
            >
              {" "}
              <Hamburger color="#fff" size={25} />
            </div>
          </nav>
        </div>

        <div
          id="mobileNav"
          className={HambergerIcon !== true ? "activateMobileNav" : ""}
        >
          <nav className="d-flex flex-column justify-content-center align-items-center">
            <li>
              {" "}
              <Link to="#"> home </Link>
            </li>
            <li>
              {" "}
              <Link to="#"> about us </Link>
            </li>
            <li>
              {" "}
              <Link to="#"> services </Link>
            </li>
            <li>
              <Link to="#"> pricing </Link>
            </li>
            <li>
              {" "}
              <Link to="#"> blog </Link>
            </li>
            <li>
              {" "}
              <Link to="#"> contact </Link>
            </li>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
