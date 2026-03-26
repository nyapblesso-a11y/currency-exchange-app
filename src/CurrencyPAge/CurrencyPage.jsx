import React, { useState } from "react";
import Header from "../Components/HeaderComponent/Header";
import "./currency.css";
import Balance from "../Components/BalancePAge/Balance";
import FundsPge from "../Components/FundsPage/FundsPge";
import {exchangeRates} from "../Components/FundsPage/FundsPge"
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
      <div className="main-bord">
        <Header defaultCurrency={defaultCurrency} setDefaultCurrency={setDefaultCurrency}/>
        <Balance balance ={balance} defaultCurrency={defaultCurrency} setDefaultCurrency={setDefaultCurrency} />
        <FundsPge dAmount={depositAmount} exchangeAmount={exchangeAmount} setExchangeAmount={setExchangeAmount} setDamount={setDepositAmount} fromCurrency={fromCurrency} setFromCurrency={setFromCurrency} toCurrency={toCurrency} setToCurrency={setToCurrency} balance={balance} setBalances={setBalances}/>
        <hr />
        <div className="total-value">
          <h4>
            Total Value in {defaultCurrency}: <span>{totalizedValue()}</span>
          </h4>
        </div>
      </div>
    </>
  );
}

export default CurrencyPage;
