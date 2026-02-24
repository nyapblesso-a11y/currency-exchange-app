import React from "react";
import "./balance.css";
import ReactCountryFlag from "react-country-flag";
function Balance({balance}) {

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
              $ <h1>{balance.USD}</h1> USD
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
              € <h1>{balance.EUR}</h1> EUR
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
               <h1>{balance.XAF}</h1> XFA
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Balance;
