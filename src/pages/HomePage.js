import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { FiZoomIn } from "react-icons/fi";

import { BsFacebook } from "react-icons/bs";

const HomePage = () => {
  return (
    <>
      <section className="firstContainer">
        <Header />

        <div className="secondContainer ">
          <div className="elementor-background-overlay"></div>

          <div
            className="elementor-shape elementor-shape-bottom"
            data-negative="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 100"
              preserveAspectRatio="none"
            >
              <path
                className="elementor-shape-fill"
                d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
	c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
	c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"
              ></path>
            </svg>
          </div>

          <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
              <div className="secondContainer-leftSide">
                <h5>AWARD WINNING SEO</h5>
                <h1>
                  We deliver growth <br /> for your business
                </h1>

                <h3>
                  Our results-driven strategies increase traffic to <br /> bring
                  new leads that convert into new sales.
                </h3>

                <div className="btnTypeOne  secondContainer-btn ">
                  <Link to="#"> Learn More </Link>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
              <div className="secondContainer-rightSide">
                <img
                  src="https://demo.themovation.com/stratus/wp-content/uploads/2020/05/SEO-1.svg"
                  alt="dsafsadfasdf"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="thirdContainer">
        <div className="iconsContainer d-flex flex-row justify-content-evenly align-items-center">
          <h3>Follow Us </h3>
          <div>
            {" "}
            <BsFacebook size={40} color="black" />{" "}
          </div>
          <div>
            {" "}
            <BsFacebook size={40} color="black" />{" "}
          </div>
          <div>
            {" "}
            <BsFacebook size={40} color="black" />{" "}
          </div>
          <div>
            {" "}
            <BsFacebook size={40} color="black" />{" "}
          </div>
        </div>
      </section>

      <section className="forthContainer px-3 py-5">
        <div className="topWave mb-5">
          <div
            className="elementor-shape elementor-shape-bottom"
            data-negative="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 100"
              preserveAspectRatio="none"
            >
              <path
                className="elementor-shape-fill"
                d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"
              ></path>
            </svg>
          </div>
        </div>

        <div className="desc text-center mb-5">
          <div>
            <h5>WHO WE ARE</h5>
          </div>

          <div>
            <h1>Your online marketing partner</h1>
          </div>

          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae
              convallis ligula. Proin <br /> dapibus ex et odio congue mollis.
              Cras finibus porta ligula non ultrices.
            </p>
          </div>
        </div>

        <div className="tripleBox">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4 mb-sm-0">
              <div className="tripleBox-card bg-white rounded-4 text-center">
                <div className="mb-3">
                  <img
                    src="images/bitcoin-removebg-preview.png"
                    alt="bitcoin"
                    width={100}
                    height={100}
                  />
                </div>

                <h3 className="mb-3">
                  Search Engine <br /> optimization{" "}
                </h3>

                <p>
                  Dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                  luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4 mb-md-0">
              <div className="tripleBox-card bg-white rounded-4 text-center ">
                <div className="mb-3">
                  <img
                    src="images/bitcoin-removebg-preview.png"
                    alt="bitcoin"
                    width={100}
                    height={100}
                  />
                </div>

                <h3 className="mb-3">
                  Search Engine <br /> optimization{" "}
                </h3>

                <p>
                  Dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                  luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-4">
              <div className="tripleBox-card bg-white rounded-4 text-center">
                <div className="mb-3">
                  <img
                    src="images/bitcoin-removebg-preview.png"
                    alt="bitcoin"
                    width={100}
                    height={100}
                  />
                </div>

                <h3 className="mb-3">
                  Search Engine <br /> optimization{" "}
                </h3>

                <p>
                  Dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                  luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bottomWave">
          <div
            className="elementor-shape elementor-shape-bottom"
            data-negative="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 100"
              preserveAspectRatio="none"
            >
              <path
                className="elementor-shape-fill"
                d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
	c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
	c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"
              ></path>
            </svg>
          </div>
        </div>
      </section>

      <section className="fifthContainer px-3 py-5">
        <div className="row twoSection mb-5">
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 px-0 px-lg-5 py-0">
            <div className="twoSection-left">
              <div className="image  text-center">
                <img src="/images/SEO-3.svg" alt="seo" />
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-6 col-lg-6 px-3 px-lg-5 py-5">
            <div className="twoSection-right">
              <div>
                <h6>HOW WE'RE DIFFERENT</h6>
              </div>

              <div>
                <h3>We offer a genuine, unique approach</h3>
              </div>

              <div>
                <p>
                  Purus biben, tincid felis sit amet, sollicit udin nisl. Mi
                  consectetur. Morbi nec massa eget orci faucibus rutrum. Nam
                  nunc turpis, maximus eget.
                </p>
              </div>

              <div className="btnTypeTwo fifthContainer-btn1">
                <Link to="#"> Learn More </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row twoSection">
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 px-3 px-lg-5 py-0">
            <div className="twoSection-right">
              <div>
                <h6>our promise</h6>
              </div>

              <div>
                <h3> Your online success is our singular goal </h3>
              </div>

              <div>
                <p>
                  Purus biben, tincid felis sit amet, sollicit udin nisl. Mi
                  consectetur. Morbi nec massa eget orci faucibus rutrum. Nam
                  nunc turpis, maximus eget.
                </p>
              </div>

              <div className="btnTypeTwo fifthContainer-btn2">
                <Link to="#"> Learn More </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-6 col-lg-6 px-0 px-lg-5 py-0">
            <div className="twoSection-left">
              <div className="image  text-center">
                <img src="/images/SEO-3.svg" alt="seo" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sixthContainer mt-5 px-3 py-5">
        {/* 
        <div className="topWave" >

          
        <div
            className="elementor-shape elementor-shape-bottom"
            data-negative="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 100"
              preserveAspectRatio="none"
            >
              <path
                className="elementor-shape-fill"
                d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
	c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
	c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"
              ></path>
            </svg>
          </div>

        </div> */}

        {/* #f0f6fc */}

        <div className="desc text-center" id="growthMethods">
          <div>
            <h6>growth methods</h6>
          </div>
          <div>
            <h2>How we deliver results </h2>
          </div>
          <div>
            {" "}
            <h5>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae
              convallis ligula. Proin <br /> dapibus ex et odio congue mollis.
              Cras finibus porta ligula non ultrices.
            </h5>{" "}
          </div>
        </div>

        <div className="tripleBox">
          <div className="row mb-4">
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-3 mb-md-0 ">
              <div className="threeBoxes-card bg-white rounded-4    ">
                <div>
                  <FiZoomIn color="#8B24FC" size={30} />
                </div>

                <div>
                  <h4>keyword research</h4>
                </div>

                <div>
                  <p>
                    Aliquam mollis quam sed mattis sodales. Morbi accumsan
                    posuere iaculis donec a scelerisque.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-3 mb-sm-0">
              <div className="threeBoxes-card bg-white rounded-4    ">
                <div>
                  <FiZoomIn color="#8B24FC" size={30} />
                </div>

                <div>
                  <h4>keyword research</h4>
                </div>

                <div>
                  <p>
                    Aliquam mollis quam sed mattis sodales. Morbi accumsan
                    posuere iaculis donec a scelerisque.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-4">
              <div className="threeBoxes-card bg-white rounded-4    ">
                <div>
                  <FiZoomIn color="#8B24FC" size={30} />
                </div>

                <div>
                  <h4>keyword research</h4>
                </div>

                <div>
                  <p>
                    Aliquam mollis quam sed mattis sodales. Morbi accumsan
                    posuere iaculis donec a scelerisque.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-3 mb-md-0">
              <div className="threeBoxes-card bg-white rounded-4  ">
                <div>
                  <FiZoomIn color="#8B24FC" size={30} />
                </div>

                <div>
                  <h4>keyword research</h4>
                </div>

                <div>
                  <p>
                    Aliquam mollis quam sed mattis sodales. Morbi accumsan
                    posuere iaculis donec a scelerisque.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-3 mb-sm-0">
              <div className="threeBoxes-card bg-white rounded-4   ">
                <div>
                  <FiZoomIn color="#8B24FC" size={30} />
                </div>

                <div>
                  <h4>keyword research</h4>
                </div>

                <div>
                  <p>
                    Aliquam mollis quam sed mattis sodales. Morbi accumsan
                    posuere iaculis donec a scelerisque.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-4">
              <div className="threeBoxes-card bg-white rounded-4   ">
                <div>
                  <FiZoomIn color="#8B24FC" size={30} />
                </div>

                <div>
                  <h4>keyword research</h4>
                </div>

                <div>
                  <p>
                    Aliquam mollis quam sed mattis sodales. Morbi accumsan
                    posuere iaculis donec a scelerisque.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="seventhContainer px-5">
        {/* <div className="topWave" >

          
<div
    className="elementor-shape elementor-shape-bottom"
    data-negative="true"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 100"
      preserveAspectRatio="none"
    >
      <path
        className="elementor-shape-fill"
        d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"
      ></path>
    </svg>
  </div>

</div> */}

        <div className="row">
          <div className="col-12 col-sm-8 col-md-8 col-lg-8 mb-4 mb-sm-0 ">
            <div className="">
              <h3>Ready to grow your business ? get in Touch ?</h3>
            </div>
          </div>
          <div className="col-12 col-sm-4 col-md-4 col-lg-4">
            <div className="text-end">
              <div className="btnTypeThree">
                <Link to="#"> Learn More </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;
