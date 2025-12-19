import React from "react";
import Header from "../Components/HeaderComponent/Header";
import "./currency.css";
import Balance from "../Components/BalancePAge/Balance";
import FundsPge from "../Components/FundsPage/FundsPge";
function CurrencyPage() {
  return (
    <>
      <div className="main-bord">
        <Header />
        <Balance />
        <FundsPge />
        <hr />
        <div className="total-value">
          <h4>
            Total Value in USD: <span>$736.38 USD</span>
          </h4>
        </div>
      </div>
    </>
  );
}

export default CurrencyPage;
