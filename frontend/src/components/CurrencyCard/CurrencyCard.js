import React from 'react'
import './CurrencyCard.css'


export const CurrencyCard = (props) => (
  <div className="CurrencyCardContainer">

    {props.currency && 
      <div className="CurrencyInfoContainer">
        <div className="CurrencyInfoName">
          <span> {props.currency.name} </span>
          <span className="CurrencyInfoSecondary"> {props.currency.symbol} </span>
        </div>
        <div className="CurrencyInfoBodyContainer">
          <div className="CurrencyInfoPrice">
            <p> Preço atual em Dólar </p>
            <p className="Info"> US$ {props.currency.price_usd} </p>
            <div className="TransactionInfo">
              <p> Transacionado nas últimas 24h </p>
              <p className="Info"> US$ {props.currency['24h_volume_usd']} </p>
            </div>
          </div>
          <div className="CurrencyInfoTransaction">
            <p> Preço atual em Bitcoin </p>
            <p className="Info"> BTC$ {props.currency.price_btc} </p>
            <div className="TransactionInfo">
              <p> Variação nos últimos 7 dias </p>
              <p className="Info"> {props.currency.percent_change_7d}% </p>
            </div>
          </div>
        </div>
      </div>
    }

    {!props.currency && 
      <div className="CurrencyEmptyState">
        <h1>Pesquise uma criptomoeda</h1>
      </div>
    }
    
  </div>
)
