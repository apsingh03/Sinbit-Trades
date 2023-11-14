import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AiFillDollarCircle } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { TbPercentage } from "react-icons/tb";

const Calculator = () => {
  const [entryPrice, setentryPrice] = useState();
  const [stopLoss, setstopLoss] = useState();
  const [leverage, setleverage] = useState();
  const [accountFund, setaccountFund] = useState();
  const [riskPerTrade, setriskPerTrade] = useState();

  // const [OpenOutputBox, setOpenOutputBox] = useState(false);

  const calculatePosition = () => {
    // console.log(entryPrice)
    // || stopLoss === undefined || leverage === undefined || accountFund === undefined || riskPerTrade === undefined

    if (entryPrice === undefined) {
      alert("Please Fill Entry Price");
    } else if (stopLoss === undefined) {
      alert("Please Fill Stop Loss");
    } else if (leverage === undefined) {
      alert("Please Fill Leverage");
    } else if (accountFund === undefined) {
      alert("Please Fill your Account fund");
    } else if (riskPerTrade === undefined) {
      alert("Please Fill your risk per trade");
    } else {
      //   console.log(entryPrice, stopLoss, leverage, accountFund, riskPerTrade);

      const fundPercent = (accountFund * riskPerTrade) / 100;
      const slDifference = entryPrice - stopLoss;
      const result = parseInt(
        (fundPercent / (slDifference * leverage)) * entryPrice
      );

      const outputTradeAmount = document.getElementById("outputTradeAmount");
      const outputOneR = document.getElementById("outputOneR");
      const outputTwoR = document.getElementById("outputTwoR");
      const outputThreeR = document.getElementById("outputThreeR");
      const outputFourR = document.getElementById("outputFourR");
      const outputFiveR = document.getElementById("outputFiveR");

      // const givenInputEntry = document.getElementById("givenInputEntry");
      // const givenInputSl = document.getElementById("givenInputSl");
      // const givenInputLeverage = document.getElementById("givenInputLeverage");
      // const givenInputAccountFund = document.getElementById(
      //   "givenInputAccountFund"
      // );
      // const givenInputRiskPerTrade = document.getElementById(
      //   "givenInputRiskPerTrade"
      // );

      // output
      outputTradeAmount.innerText = Math.abs(result);
      outputOneR.innerText = parseInt(entryPrice) + slDifference * 1;
      outputTwoR.innerText = parseInt(entryPrice) + slDifference * 2;
      outputThreeR.innerText = parseInt(entryPrice) + slDifference * 3;
      outputFourR.innerText = parseInt(entryPrice) + slDifference * 4;
      outputFiveR.innerText = parseInt(entryPrice) + slDifference * 5;
    }
  };

  return (
    <>
      <Header />

      <div id="calculatorPage" className="py-0 px-5">
        <div className="cryptoCalculator px-4 py-4">
          <div className="row mb-3">
            <div className=" col-12 col-sm-6 col-md-6 col-lg-6 ">
              <label htmlFor="entryPrice">Entry Price</label>
              <div className="input-group ">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon3">
                    <AiFillDollarCircle size={25} />
                  </span>
                </div>
                <input
                  type="number"
                  className="form-control"
                  id="entryPrice"
                  required
                  min={1}
                  onChange={(e) => setentryPrice(e.target.value)}
                />
              </div>
            </div>

            <div className="  col-12 col-sm-6 col-md-6 col-lg-6 ">
              <label htmlFor="stopLoss">Stop Loss</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon3">
                    <AiFillDollarCircle size={25} />
                  </span>
                </div>
                <input
                  type="number"
                  className="form-control"
                  id="stopLoss"
                  min={1}
                  required
                  onChange={(e) => setstopLoss(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="row mb-3">
            <div className=" col-12 col-sm-6 col-md-6 col-lg-6 ">
              <label htmlFor="leverage">Leverage</label>
              <div className="input-group ">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon3">
                    <RxCross2 size={25} />
                  </span>
                </div>
                <input
                  type="number"
                  className="form-control"
                  id="leverage"
                  min={1}
                  required
                  onChange={(e) => setleverage(e.target.value)}
                />
              </div>
            </div>

            <div className="  col-12 col-sm-6 col-md-6 col-lg-6 ">
              <label htmlFor="accountFund">Account Fund</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon3">
                    <AiFillDollarCircle size={25} />
                  </span>
                </div>
                <input
                  type="number"
                  className="form-control"
                  id="accountFund"
                  required
                  min={1}
                  onChange={(e) => setaccountFund(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="  col-12 col-sm-12 col-md-12 col-lg-12 ">
            <label htmlFor="riskPercentage">Risk Percentage</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon3">
                  <TbPercentage size={25} />
                </span>
              </div>
              <input
                type="number"
                className="form-control"
                id="riskPercentage"
                required
                min={1}
                max={100}
                onChange={(e) => setriskPerTrade(e.target.value)}
              />
            </div>
          </div>

          <div className="text-center mt-3">
            <input
              type="button"
              value="Calculator"
              className="btn btn-lg btn-primary py-2 px-5"
              onClick={calculatePosition}
            />

            {/* <button
             
            
            >
              Calculate{" "}
            </button> */}
          </div>
        </div>

        <div className="calculationResult mb-5  bg-white mt-5 px-2 py-3">
          <div className="d-flex flex-row">
            <p>
              {" "}
              <b>Position Size -</b> $
            </p>
            <p id="outputTradeAmount"></p>
          </div>

          <div
            className="d-flex flex-row justify-content-between"
            style={{ paddingRight: "100px" }}
          >
            <div className="d-flex flex-row">
              <p>
                {" "}
                <b>1R -</b> $
              </p>
              <p id="outputOneR"></p>
            </div>

            <div className="d-flex flex-row">
              <p>
                <b>2R -</b> $
              </p>
              <p id="outputTwoR"></p>
            </div>

            <div className="d-flex flex-row">
              <p>
                {" "}
                <b>3R -</b>$
              </p>
              <p id="outputThreeR"></p>
            </div>

            <div className="d-flex flex-row">
              <p>
                {" "}
                <b>4R -</b> $
              </p>
              <p id="outputFourR"></p>
            </div>

            <div className="d-flex flex-row">
              <p>
                {" "}
                <b>5R -</b> $
              </p>
              <p id="outputFiveR"></p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Calculator;
