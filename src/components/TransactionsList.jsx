import React from "react";
import ticker from "../assets/ticker 1.png";
import background from "../assets/background.svg";
import volume from "../assets/volume 1.png";
import contract from "../assets/contract 1.png";
import risk from "../assets/risk 1.png";

const TransactionsList = () => {
  return (
    <div className="transactions-container">
      <div className="transactions">
        <div className="transactions-header-container">
          <img
            loading="lazy"
            src={background}
            alt="background"
            className="background-img"
          />
          <div className="transaction-header">
            <div className="category-container">
              <img
                loading="lazy"
                srcSet={ticker}
                alt="ticker"
                className="transaction-img"
              />
              <h3 className="category-name">$TSLA</h3>
            </div>
            <div className="category-container">
              <img
                loading="lazy"
                alt="contract"
                src={contract}
                className="transaction-img"
              />
              <h3 className="category-name">200 Contracts</h3>
            </div>
            <div className="category-container">
              <img
                loading="lazy"
                src={volume}
                alt="volume"
                className="transaction-img"
              />
              <h3 className="category-name">12.2%</h3>
            </div>
            <div className="category-container">
              <img
                loading="lazy"
                src={risk}
                alt="risk"
                className="transaction-img"
              />
              <h3 className="category-name">High risk</h3>
            </div>
          </div>
          <p className="latest-transaction">
            Someone Just bought xxxx contracts of $XYZ, this is notable because
            the relative volume on this options trade is X.X%.
          </p>
        </div>
        <p className="transaction">
          X company released a short report on $XYZ, High IV option sales opps
        </p>
        <p className="transaction">
          $XYZ just announced an acquisition of $ABC at $X. This is an arbitrage
          opportunity, with the max gain being %X if the deal closes, but the
          possible risk is %Y if the deal fails.
        </p>
        <p className="transaction">
          $XYZ just announced an acquisition of $ABC at $X. This is an arbitrage
          opportunity, with the max gain being %X if the deal closes, but the
          possible risk is %Y if the deal fails.
        </p>
        <p className="transaction">
          $XYZ just announced an acquisition of $ABC at $X. This is an arbitrage
          opportunity, with the max gain being %X if the deal closes, but the
          possible risk is %Y if the deal fails.
        </p>
        <p className="transaction">
          $XYZ just announced an acquisition of $ABC at $X. This is an arbitrage
          opportunity, with the max gain being %X if the deal closes, but the
          possible risk is %Y if the deal fails.
        </p>
        <p className="transaction">
          $XYZ just announced an acquisition of $ABC at $X. This is an arbitrage
          opportunity, with the max gain being %X if the deal closes, but the
          possible risk is %Y if the deal fails.
        </p>
      </div>
    </div>
  );
};

export default TransactionsList;
