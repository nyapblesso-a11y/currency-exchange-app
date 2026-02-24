import React, { useState } from "react";
import Header from "../Components/HeaderComponent/Header";
import "./currency.css";
import Balance from "../Components/BalancePAge/Balance";
import FundsPge from "../Components/FundsPage/FundsPge";
function CurrencyPage() {
  const [defaultCurrency, setDefaultCurrency] = useState("USD")
  const [balance, setBalances] = useState({
    USD:0,
    EUR: 0,
    XAF: 0,
  })

  const [amount, setAmount] = useState("")
  const [fromCurrency, setFromCurrency] = useState("USD")
  const [toCurrency, setToCurrency] = useState("EUR")

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
