import React from "react";
import "./fundspage.css";
function FundsPge({amount, setAmount, fromCurrency, setFromCurrency, toCurrency, setToCurrency, balances, setBalances}) {

  const exchangeRates = {
  USD: { EUR: 0.8483, XAF: 556.74 },
  EUR: { USD: 1.1789, XAF: 655.957 },
  XAF: { USD: 0.0018, EUR: 0.0015 },
};

  const handleExchange = () => {
    const exchangeRate = exchangeRates[fromCurrency][toCurrency]
  }

  const handleDeposit = () => {
    const amountToDeposit = parseFloat(amount)
    if(amount === '' && amount <= 0) {
      alert('amount must be valid')
      return
    }
    setBalances((prevBalances) => ({
      ...prevBalances, [fromCurrency]: prevBalances[fromCurrency] + amountToDeposit,
    }))
    setAmount("")
  }
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
              <input type="number" placeholder="Enter amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
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
