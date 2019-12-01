import React from 'react'
import './CurrencyItem.css'


export const CurrencyItem = (props) => (
  <article className="Container">
    <section className="RowContent">
      <div className="Name"> {props.currency.name} </div>
      <div className="Symbol"> {props.currency.symbol} </div>
    </section>
    <section className="RowContent">
      <div className="Price">$ {props.currency.price_usd} </div>
      <div className="Rank"> #{props.rank} </div>
    </section>
  </article>
)
