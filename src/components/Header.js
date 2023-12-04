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
            <Link to="/">Sinbit Trades</Link>
          </div>

          <nav className="d-flex flex-row align-items-center">
            <div>
              <Link to="/">Home</Link>
            </div>

            <div>
              <Link to="/">Trade Log</Link>
            </div>

            <div>
              <Link to="/blog/">Learn</Link>
            </div>

            <div>
              <Link to="/calculator/">Calculator</Link>
            </div>
            <div>
              <Link to="https://telegram.me/sinbittrades" target="_blank">
                Telegram
              </Link>
            </div>

            {/* <div>
              <Link to="/blogpost/">Blog Post</Link>
            </div> */}

            <div>
              {sessionStorage.getItem("adminLogin") === null ? (
                ""
              ) : (
                // <Link to="/adminSignin/">Admin Sign in</Link>
                <Link to="/adminPanel/">Admin Dashboard</Link>
              )}
            </div>

            <div
              id="hamburgerIcon"
              onClick={() => setHambergerIcon(!HambergerIcon)}
            >
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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Trade Log</Link>
            </li>
            <li>
              <Link to="/blog/">Learn</Link>
            </li>
            <li>
              <Link to="/calculator/">Calculator</Link>
            </li>
            <li>
              {" "}
              <Link to="https://telegram.me/sinbittrades" target="_blank">
                Telegram
              </Link>
            </li>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
