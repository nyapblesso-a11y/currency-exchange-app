import React from "react";
import "./header.css";
function Header() {
  return (
    <>
      <div>
        <header className="header">
          <h3>Currency Exchange Wallet</h3>

          <div className="default-currency">
            <h4>Default Currency:</h4>
            <select name="" id="">
              <option value="">USD</option>
              <option value="">EUR</option>
              <option value="">XAF</option>
            </select>
          </div>
        </header>
        <hr />
      </div>
    </>
  );
}

export default Header;
