import React from "react";
import "./header.css";
function Header({ defaultCurrency, setDefaultCurrency}) {
  return (
    <>
      <div>
        <header className="header">
          <h3>Currency Exchange Wallet</h3>

          <div className="default-currency">
            <h4>Default Currency: {defaultCurrency}</h4>
            <select value={defaultCurrency} onChange={(e) => setDefaultCurrency(e.target.value)}>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="XAF">XAF</option>
            </select>
          </div>
        </header>
        <hr />
      </div>
    </>
  );
}

export default Header;
