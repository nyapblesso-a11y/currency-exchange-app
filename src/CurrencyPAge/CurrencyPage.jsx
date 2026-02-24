import React, { useState } from "react";
import Header from "../Components/HeaderComponent/Header";
import "./currency.css";
import Balance from "../Components/BalancePAge/Balance";
import FundsPge from "../Components/FundsPage/FundsPge";
function CurrencyPage() {
  const [defaultCurrency, setDefaultCurrency] = useState("USD")

const [balance, setBalances] = useState(() => {
  const savedBalances = localStorage.getItem('user_balances');
  return savedBalances ? JSON.parse(savedBalances) : { USD: 1000, EUR: 0, XAF: 0 };
});

const [depositAmount, setDepositAmount] = useState(() => {
  return localStorage.getItem('deposit_input') || "";
});

  const [exchangeAmount, setExchangeAmount] = useState("")
  const [fromCurrency, setFromCurrency] = useState("USD")
  const [toCurrency, setToCurrency] = useState("EUR")

  return (
    <>
      <div className="main-bord">
        <Header />
        <Balance balance ={balance} />
        <FundsPge dAmount={depositAmount} exchangeAmount={exchangeAmount} setExchangeAmount={setExchangeAmount} setDamount={setDepositAmount} fromCurrency={fromCurrency} setFromCurrency={setFromCurrency} toCurrency={toCurrency} setToCurrency={setToCurrency} balance={balance} setBalances={setBalances}/>
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
