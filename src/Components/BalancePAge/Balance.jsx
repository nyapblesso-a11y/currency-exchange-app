import React from "react";
import "./balance.css";
import { exchangeRates } from "../FundsPage/FundsPge"
import ReactCountryFlag from "react-country-flag";
function Balance({balance, defaultCurrency, setDefaultCurrency}) {

  const totalizedValue = () => {
    let total=0
    Object.keys(balance).forEach((currency) => {
      if(currency === defaultCurrency) {
        total += balance[currency]
      } else {
        total += balance[currency] * exchangeRates[currency][defaultCurrency]
      }
    })
    return total.toFixed(2)
  }
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
              $ <h1>{balance.USD}</h1>.00 USD
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
              € <h1>{balance.EUR}</h1> .00 EUR
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
               <h1>{balance.XAF}</h1>.00 XFA
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Balance;
