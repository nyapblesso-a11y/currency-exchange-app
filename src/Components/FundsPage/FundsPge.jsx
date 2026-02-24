import React from "react";
import "./fundspage.css";
function FundsPge() {

  const exchangeRate = {
  USD: { EUR: 0.8483, XAF: 556.74 },
  EUR: { USD: 1.1789, XAF: 655.957 },
  XAF: { USD: 0.0018, EUR: 0.0015 },
};
  return (
    <>
      <div className="funds-card">
        <div className="exchange-card">
          <h4>Currency Exchange</h4>
          <hr />
          <div className="exchange">
            <div className="amount">
              <p>Amount</p>
              <input type="number" />
            </div>
            <div className="select">
              <p>from</p>
              <select name="" id="">
                <option value="">USD</option>
                <option value="">EUR</option>
                <option value="">XFA</option>
              </select>
            </div>
            <div className="select">
              <p>To</p>
              <select name="" id="">
                <option value="">USD</option>
                <option value="">EUR</option>
                <option value="">XFA</option>
              </select>
            </div>
          </div>

            <button className="button">Exchange</button>
          
        </div>

        <div className="exchange-card">
          <h4>Deposit Funds</h4>
          <hr />
          <div className="exchange">
            <div className="amount">
              <p>Amount</p>
              <input type="number" placeholder="Enter amount" />
            </div>
            <div className="select">
              <p>Currency</p>
              <select name="" id="">
                <option value="">USD</option>
                <option value="">EUR</option>
                <option value="">XFA</option>
              </select>
            </div>
          </div>

          <div className="button-1">
            <button>Deposit</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FundsPge;
