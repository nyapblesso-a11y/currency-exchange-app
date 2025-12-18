import React from "react";
import "./balance.css";
import ReactCountryFlag from "react-country-flag";
function Balance() {
  return (
    <>
      <div className="cards">
        <div className="balance-usd">
          <div className="top">
            <ReactCountryFlag countryCode="US" />
            <p>USD Balance</p>
          </div>
          <hr />
          <div className="balance-amount">
            <span>
              $ <h1>100</h1>.00 USD
            </span>
          </div>
        </div>

        <div className="balance-eur">
          <div className="top">
                <ReactCountryFlag countryCode="EU" />
            <p>USD Balance</p>
          </div>
          <hr />
          <div className="balance-amount">
            <span>
              € <h1>500</h1> .00 EUR
            </span>
          </div>
        </div>

        <div className="balance-xfa">
          <div className="top">
                 <ReactCountryFlag countryCode="CM" />
            <p>USD Balance</p>
          </div>
          <hr />
          <div className="balance-amount">
            <span>
               <h1>10000</h1>.00 XFA
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Balance;
