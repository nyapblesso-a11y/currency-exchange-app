import React from 'react'
import Header from '../Components/HeaderComponent/Header'
import "./currency.css"
import Balance from '../Components/BalancePAge/Balance'
import FundsPge from '../Components/FundsPage/FundsPge'
function CurrencyPage() {
  return (
    <>
     <div className='main-bord'>
        <Header/>
        <Balance/>
        <FundsPge/>
     </div>
    </>
  )
}

export default CurrencyPage