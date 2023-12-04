import React from "react";
import { FaTelegram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";
import { SiBinance } from "react-icons/si";
import { AiFillCalculator } from "react-icons/ai";
import { MdArticle } from "react-icons/md";
import { FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-3">
            <div>
              <div className="heading">
                <h3>About Us</h3>
              </div>

              <div className="lowerNav">
                <p className="desc">
                  The purpose of Sinbit Trades is to share my trading journey.
                  With proper risk management and trading strategy I aim to grow
                  my portfolio in a slow and steady manner.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-3">
            <div>
              <div className="heading">
                <h3>Contact Info</h3>
              </div>

              <nav className="lowerNav">
                <div className="d-flex flex-row">
                  <div className="icon">
                    {" "}
                    <FaTelegram size={20} color="black" />{" "}
                  </div>
                  <div className="iconText">
                    <Link to="https://telegram.me/sinbittrades" target="_blank">
                      Sinbit Trades
                    </Link>
                  </div>
                </div>

                <div className="d-flex flex-row">
                  <div className="icon">
                    {" "}
                    <IoIosMail size={20} color="black" />{" "}
                  </div>
                  <div className="iconText">
                    <Link to="mailto:someone@example.com">Mail me</Link>
                  </div>
                </div>
              </nav>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-3">
            <div>
              <div className="heading">
                <h3>Crypto Exchanges</h3>
              </div>

              <nav className="lowerNav">
                <div className="d-flex flex-row">
                  <div className="icon">
                    {" "}
                    <SiBinance size={20} color="black" />{" "}
                  </div>
                  <div className="iconText">
                    <Link to="#">Binance </Link>
                  </div>
                </div>

                <div className="d-flex flex-row">
                  <div className="icon">
                    {" "}
                    <IoIosMail size={20} color="black" />{" "}
                  </div>
                  <div className="iconText">
                    <Link to="#">ByBit</Link>
                  </div>
                </div>
              </nav>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-3">
            <div>
              <div className="heading">
                <h3>Links </h3>
              </div>

              <nav className="lowerNav">
                <div className="d-flex flex-row">
                  <div className="icon">
                    {" "}
                    <AiFillCalculator size={20} color="black" />{" "}
                  </div>
                  <div className="iconText">
                    <Link to="/calculator/">Position Calculator </Link>
                  </div>
                </div>

                <div className="d-flex flex-row">
                  <div className="icon">
                    {" "}
                    <MdArticle size={20} color="black" />{" "}
                  </div>
                  <div className="iconText">
                    <Link to="/blog/">Learning Blogs</Link>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>

        <div className="lowerSection">
          <hr style={{ color: "#282828" }} />

          <div className="d-flex flex-row justify-content-end socialIcons ">
            <Link to="#">
              {" "}
              <FaFacebook size={30} color="#000000C7" />{" "}
            </Link>
            <Link to="#">
              {" "}
              <FaYoutube size={30} color="#000000C7" />{" "}
            </Link>
            <Link to="#">
              {" "}
              <FaTwitter size={30} color="#000000C7" />{" "}
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
