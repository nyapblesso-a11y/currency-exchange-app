

import React, { useState } from "react";

const CurrencyExchangeApp = () => {
  const [defaultCurrency, setDefaultCurrency] = useState("USD");
  const [balances, setBalances] = useState({
    USD: 0,
    EUR: 0,
    XAF: 0,
  });
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");

  const exchangeRates = {
    USD: { EUR: 0.88, XAF: 550 },
    EUR: { USD: 1.24, XAF: 655.957 },
    XAF: { USD: 0.0018, EUR: 0.0015 },
  };
  const handleExchange = () => {
    const exchangeRate = exchangeRates[fromCurrency][toCurrency];
    const amountToExchange = parseFloat(amount);
    if (balances[fromCurrency] >= amountToExchange) {
      setBalances((prevBalances) => ({
        ...prevBalances,
        [fromCurrency]: prevBalances[fromCurrency] - amountToExchange,
        [toCurrency]:
          prevBalances[toCurrency] + amountToExchange * exchangeRate,
      }));
      setAmount("");
    }
  };

  const handleDeposit = () => {
    const amountToDeposit = parseFloat(amount);
    setBalances((prevBalances) => ({
      ...prevBalances,
      [fromCurrency]: prevBalances[fromCurrency] + amountToDeposit,
    }));
    setAmount("");
  };

  const totalizedValue = () => {
    let total = 0;
    Object.keys(balances).forEach((currency) => {
      if (currency === defaultCurrency) {
        total += balances[currency];
      } else {
        total += balances[currency] * exchangeRates[currency][defaultCurrency];
      }
    });
    return total.toFixed(2);
  };

  return (
    <div>
      <h1>Currency Exchange App</h1>
      <p>Default Currency: {defaultCurrency}</p>
      <select
        value={defaultCurrency}
        onChange={(e) => setDefaultCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="XAF">XAF</option>
      </select>
      <h2>Balances:</h2>
      <p>USD: {balances.USD}</p>
      <p>EUR: {balances.EUR}</p>
      <p>XAF: {balances.XAF}</p>
      <p>
        Totalized Value in {defaultCurrency}: {totalizedValue()}
      </p>
      <h2>Exchange:</h2>
      <select
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="XAF">XAF</option>
      </select>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="XAF">XAF</option>
      </select>
      <button onClick={handleExchange}>Exchange</button>
      <h2>Deposit:</h2>
      <select
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="XAF">XAF</option>
      </select>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleDeposit}>Deposit</button>
    </div>
  );
};

export default CurrencyExchangeApp;


)
🌐 Background & Surfaces

App background: #F5F7FA

Main card background: #FFFFFF

Section background (forms): #F8FAFC

Divider / border: #E5E7EB


🟦 Primary (USD / Main Actions)

Primary blue: #2563EB

Primary blue (hover): #1D4ED8

Primary blue (light): #DBEAFE

Text on blue: #FFFFFF


🟪 Secondary (EUR)

EUR card blue: #1E40AF

EUR gradient start: #1E3A8A

EUR gradient end: #2563EB

Text on EUR card: #FFFFFF



🟩 Accent (XAF / Success)

XAF green: #16A34A

XAF green (dark): #15803D

Success / Deposit button: #22C55E

Text on green: #FFFFFF



🧾 Typography

Main heading: #0F172A

Section titles: #1E293B

Body text: #334155

Muted / label text: #64748B