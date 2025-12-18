import React from 'react'
import Header from '../Components/HeaderComponent/Header'
import "./currency.css"
import Balance from '../Components/BalancePAge/Balance'
function CurrencyPage() {
  return (
    <>
     <div className='main-bord'>
        <Header/>
        <Balance/>
     </div>
    </>
  )
}

export default CurrencyPage