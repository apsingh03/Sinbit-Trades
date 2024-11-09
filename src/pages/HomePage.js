import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
// import { FiZoomIn } from "react-icons/fi";
// import { AiFillCalculator ,  AiFillDatabase  } from "react-icons/ai";
// import { BsFacebook } from "react-icons/bs";
// import { FcReading } from "react-icons/fc";
import { FaTelegram, FaYoutube, FaTwitter } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import SeoIcon from "../components/SvgIcons/Icon";
import SocialMediaIcon from "../components/SvgIcons/SocialMedia";
import SearchMediaIcon from "../components/SvgIcons/SearchMedia";

const HomePage = () => {
  // console.log("script .js starts ")

  // const counterNum = document.querySelectorAll(".counter-numbers")

  // const counterSpeed = 200;

  // counterNum.forEach( (element) => {

  //   const updateNumber = ( ) => {

  //     console.log("-----")
  //     const targetNumber = parseInt( element.dataset.number )
  //     // console.log(targetNumber)

  //     const initialNum = parseInt( element.innerText );

  //     const incrementNumber = Math.trunc(targetNumber / counterSpeed)

  //     // console.log(incrementNumber)

  //     if (initialNum < targetNumber) {
  //       element.innerText = `${initialNum + incrementNumber} +`

  //       setTimeout( updateNumber , 10 )

  //     }
  //   };
  //   console.log( element )

  //     console.log("--@@@---")
  // });

  // console.log("----qaaaaaaaaaaaaa--")

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
                <h5>Trend is your Friend</h5>

                <h2>
                  Understanding market Psychology through Technical and
                  Fundamental Analysis
                </h2>

                <h4>
                  {" "}
                  Sharing result driven strategies and content along with
                  prudent risk management that have helped me over the years to
                  become a better trader.{" "}
                </h4>

                <div className="btnTypeOne  secondContainer-btn ">
                  <Link to="#">Learn More</Link>
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
            <Link to="https://telegram.me/sinbittrades">
              {" "}
              <FaTelegram size={70} color="black" />{" "}
            </Link>
          </div>
          <div>
            <Link to="https://telegram.me/sinbittrades">
              {" "}
              <IoIosMail size={70} color="black" />{" "}
            </Link>
          </div>
          <div>
            <Link to="https://telegram.me/sinbittrades">
              {" "}
              <FaYoutube size={70} color="black" />{" "}
            </Link>
          </div>
          <div>
            <Link to="https://telegram.me/sinbittrades">
              {" "}
              <FaTwitter size={70} color="black" />{" "}
            </Link>
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
          <div>{/* <h5>WHO WE ARE</h5> */}</div>

          <div>
            <h1>Trade after confirmation not Prediction</h1>
          </div>

          <div>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae
              convallis ligula. Proin <br /> dapibus ex et odio congue mollis.
              Cras finibus porta ligula non ultrices.
            </p> */}

            <p>
              Over the last 10 years as a trader, the biggest thing I have
              learned is that to become a good trader, <br /> you have to learn
              risk management first. Price action, trends and indicators define
              my trading strategy <br /> along with a robust risk management
              system. Here you will find a comprehensive trade log of my <br />{" "}
              market analysis and learnings.
            </p>
          </div>
        </div>

        <div className="tripleBox">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 mb-4 mb-sm-0">
              <div className="tripleBox-card rounded-4 text-center">
                <div className="mb-3">
                  <SeoIcon />
                </div>

                <h3 className="mb-3">My Trade Log </h3>

                <p className="mb-5">
                  Market analysis and trades which I think should be taken in
                  crypto and forex markets shared real time.
                </p>

                <div className="btnTypeTwo fifthContainer-btn1">
                  <Link to="/calculator/"> Click Here </Link>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 mb-4 mb-sm-0">
              <div className="tripleBox-card rounded-4 text-center">
                <div className="mb-3">
                  <SocialMediaIcon />
                </div>

                <h3 className="mb-3">Learn and Grow </h3>

                <p className="mb-5">
                  Educational content and tests which can help you to understand
                  the market better and help you to take careful decisions while
                  executing any trade.
                </p>

                <div className="btnTypeTwo fifthContainer-btn1">
                  <Link to="/calculator/"> Click Here </Link>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
              <div className="tripleBox-card rounded-4 text-center ">
                <div className="mb-3">
                  <SearchMediaIcon />
                </div>

                <h3 className="mb-3">Smart Tools and Data </h3>

                <p className="mb-5">
                  Easy to use tools to help you manage risk management and aid
                  you in your trading journey
                </p>
                <div className="btnTypeTwo fifthContainer-btn1">
                  <Link to="/blog/"> Click Here </Link>
                </div>
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
        <div className="row twoSection">
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 px-0 px-lg-5 py-0">
            <div className="twoSection-left">
              <div className="image  text-center">
                <img src="/images/SEO-3.svg" alt="seo" />
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-6 col-lg-6 px-3 px-lg-5 py-0">
            <div className="twoSection-right">
              {/* <div>
                <h6>Trust matters</h6>
              </div> */}

              <div>
                <h3> Higher the R:R , Better are the trades </h3>
              </div>

              <div>
                <p>
                  R:R stands for Risk:Reward. A trade with entry at 1000 and the
                  target at 1200 with stop loss at 800 is 1:1 R:R. Move the
                  target to 1400, it becomes 1:2 R:R and so on. Never fall into
                  the trap of following low quality traders who share below 1:1
                  R:R trades and that too with multiple targets. Executing
                  Higher R:R trades is key to become a good trader
                </p>
              </div>

              <div className="btnTypeTwo fifthContainer-btn2">
                <Link to="https://telegram.me/sinbittrades" target="_blank">
                  {" "}
                  Join Our Telegram{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fifthContainer px-3 py-5">
        <div className="row twoSection">
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 px-3 px-lg-5 py-0">
            <div className="twoSection-right">
              {/* <div>
               <h6>Trust matters</h6>
             </div> */}

              <div>
                <h3> Consistent small Profits make a big portfolio </h3>
              </div>

              <div>
                <p>
                  If you have decided to become a trader then always remember
                  that your wins should be bigger than your losses. Never ever
                  remove your stop loss, -1R loss is better than liquidating the
                  whole account. People often think the market will come back to
                  their entry and do the biggest sin of removing stop-loss. Risk
                  management is your biggest friend
                </p>
              </div>

              <div className="btnTypeTwo fifthContainer-btn2">
                <Link to="/blog/" target="_blank">
                  Read Our Blogs{" "}
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-6 col-lg-6 px-0 px-lg-5 py-0">
            <div className="twoSection-left">
              <div className="image  text-center">
                <img
                  src="https://demo.themovation.com/stratus/wp-content/uploads/2020/05/SEO-2.svg"
                  alt="seo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sixthContainer mt-5 px-3 py-5">
        
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

        </div>

       

       

        <div className="desc text-center" id="growthMethods">
          {/* <div>
            <h6>growth methods</h6>
          </div> */}
          <div>
            <h2>Unbreakable 6 Rules of Trading </h2>
          </div>
          <div>
            {" "}
            {/* <h5>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae
              convallis ligula. Proin <br /> dapibus ex et odio congue mollis.
              Cras finibus porta ligula non ultrices.
            </h5>{" "} */}
          </div>
        </div>

        <div className="tripleBox">
          <div className="row mb-4">
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-3 mb-md-0 ">
              <div className="threeBoxes-card  rounded-4    ">
                <div>
                  <img
                    src="images/icons/glass.png"
                    width={50}
                    height={50}
                    alt="glass"
                  />
                </div>

                <div>
                  <h4>Asset Research</h4>
                </div>

                <div>
                  <p className="counter-numbers" data-number="2000">
                    Always focus on trading the trending assets in the crypto
                    markets. Never fall in the trap of chasing low liquidity
                    dead coins
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-3 mb-sm-0">
              <div className="threeBoxes-card  rounded-4    ">
                <div>
                  <img
                    src="images/icons/link.png"
                    width={50}
                    height={50}
                    alt="link"
                  />
                </div>

                <div>
                  <h4>Diversify your Portfolio</h4>
                </div>

                <div>
                  <p className="counter-numbers" data-number="3000">
                    Whether it's trading or keeping your assets, Never ever put
                    all your eggs in one basket. Hedge your trades in different
                    markets like stock crypto forex etc and keep your assets in
                    different wallets.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-4">
              <div className="threeBoxes-card  rounded-4    ">
                <div>
                  <img
                    src="images/icons/note-book.png"
                    width={50}
                    height={50}
                    alt="ranking"
                  />
                </div>

                <div>
                  <h4>Keep a Trade log</h4>
                </div>

                <div>
                  <p className="counter-numbers" data-number="6000">
                    You will never stop committing the same mistakes unless you
                    start recalling them on a regular basis. Make a journal and
                    write down your thought process, your losses and profits to
                    be able to recall them when time comes to avoid doing
                    blunders.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-3 mb-md-0">
              <div className="threeBoxes-card  rounded-4  ">
                <div>
                  <img
                    src="images/icons/ranking.png"
                    width={50}
                    height={50}
                    alt="ranking"
                  />
                </div>

                <div>
                  <h4>Higher R:R Trades</h4>
                </div>

                <div>
                  <p>
                    Never ever fall in the trap of taking tiny trades with
                    shitty R:R . A trader having 1:3 R:R with just 30% accuracy
                    is highly profitable while a trader having 1:0.5 R:R needs
                    around 68% accuracy just to breakeven. Never go below 1:1
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-3 mb-sm-0">
              <div className="threeBoxes-card  rounded-4   ">
                <div>
                  <img
                    src="images/icons/globe.png"
                    width={50}
                    height={50}
                    alt="globe"
                  />
                </div>

                <div>
                  <h4>Market Noise</h4>
                </div>

                <div>
                  <p>
                    While developing your own strategy is very important,
                    listening to what is happening in the market is also equally
                    valuable. Follow good sources of news and information to
                    keep you updated with key events around the world like FOMC,
                    CPI, GDP Data etc
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-4">
              <div className="threeBoxes-card  rounded-4   ">
                <div>
                  <img
                    src="images/icons/diamond.png"
                    width={50}
                    height={50}
                    alt="Diamond"
                  />
                </div>

                <div>
                  <h4>Strategy over Emotions</h4>
                </div>

                <div>
                  <p>
                    Small profit is always better than a loss. Always keep in
                    mind that sharks are in the market to trap the liquidity of
                    retailers so that they fill their order. Never fomo and
                    become their meal. If a trade is lost, have patience and
                    wait for next opportunity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="seventhContainer px-5">
        <div className="topWave">
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

        <div className="row">
          <div className="col-12 col-sm-8 col-md-8 col-lg-8 mb-4 mb-sm-0 ">
            <div className="">
              <h3>Want to see my Trade Log?</h3>
            </div>
          </div>
          <div className="col-12 col-sm-4 col-md-4 col-lg-4">
            <div className="text-end">
              <div className="btnTypeThree">
                <Link to="https://telegram.me/sinbittrades" target="_blank">
                  {" "}
                  Click to Join{" "}
                </Link>
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
