import { useEffect } from "react";
import React from "react";
import "./fundspage.css";
function FundsPge({dAmount,exchangeAmount, setExchangeAmount, setDamount, fromCurrency, setFromCurrency, toCurrency, setToCurrency, balance, setBalances}) {

  const exchangeRates = {
  USD: { EUR: 0.8483, XAF: 556.74 },
  EUR: { USD: 1.1789, XAF: 655.957 },
  XAF: { USD: 0.0018, EUR: 0.0015 },
};
useEffect(() => {
  localStorage.setItem('user_balances', JSON.stringify(balance));
}, [balance]);

useEffect(() => {
  localStorage.setItem('deposit_input', dAmount);
}, [dAmount]);

  const handleExchange = () => {
  const amountToExchange = parseFloat(exchangeAmount);

  if (isNaN(amountToExchange) || amountToExchange <= 0) {
    alert("Please enter a valid amount");
    return;
  }

  const exchangeRate = fromCurrency === toCurrency 
    ? 1 
    : exchangeRates[fromCurrency]?.[toCurrency];

  if (exchangeRate === undefined) {
    alert(`Exchange rate from ${fromCurrency} to ${toCurrency} not found.`);
    return;
  }

 
 if (balance[fromCurrency] >= amountToExchange) {
  setBalances((prevBalances) => ({
    ...prevBalances,
    [fromCurrency]: Number((prevBalances[fromCurrency] - amountToExchange).toFixed(4)),
    [toCurrency]: Number((prevBalances[toCurrency] + (amountToExchange * exchangeRate)).toFixed(4)),
  }));
  
  setExchangeAmount(""); 
} else {
    alert("Insignificant funds");
  }
};

  const handleDeposit = () => {
    const amountToDeposit = parseFloat(dAmount)
    if(dAmount === '' && dAmount <= 0) {
      alert('amount must be valid')
      return
    }
    setBalances((prevBalances) => ({
      ...prevBalances, [fromCurrency]: prevBalances[fromCurrency] + amountToDeposit,
    }))
    setDamount("")
  }
  return (
    <>
      <div className="funds-card">
        <div className="exchange-card">
          <h4>Exchange:</h4>
          <hr />
          <div className="exchange">
            <div className="amount">
              <p>Amount</p>
              <input type="number" value={exchangeAmount}onChange={(e) => setExchangeAmount(e.target.value)}/>
            </div>
            <div className="select">
              <p>from</p>
              <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="XAF">XFA</option>
              </select>
            </div>
            <div className="select">
              <p>To</p>
              <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="XAF">XFA</option>
              </select>
            </div>
          </div>

            <button onClick={handleExchange} className="button">Exchange</button>
          
        </div>

        <div className="exchange-card">
          <h4>Deposit Funds</h4>
          <hr />
          <div className="exchange">
            <div className="amount">
              <p>Amount</p>
              <input type="number" placeholder="Enter amount" value={dAmount} onChange={(e) => setDamount(e.target.value)} />
            </div>
            <div className="select">
              <p>Currency</p>
              <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
                <option value="USB">USD</option>
                <option value="EUR">EUR</option>
                <option value="XAF">XFA</option>
              </select>
            </div>
          </div>

          <div className="button-1">
            <button onClick={handleDeposit}>Deposit</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FundsPge;
