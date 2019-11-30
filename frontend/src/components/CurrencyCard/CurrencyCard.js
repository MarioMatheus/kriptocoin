import React from 'react'
import './CurrencyCard.css'


export const CurrencyCard = (props) => (
  <div>

    {props.currency && 
      <div>
        <h1>Currency Name</h1>
        <p> Currency Code </p>
        <p> Currency Doll Price </p>
        <p> Currency Bitcoin Price </p>
        <p> Transacionado nas ultimas 24h em Doll </p>
        <p> Percentual de variacao nos ultimos 7d </p>
      </div>
    }

    {!props.currency && 
      <div>
        <h1>Pesquise uma criptomoeda</h1>
      </div>
    }
    
  </div>
)
