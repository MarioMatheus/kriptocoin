import React, { Component } from 'react';
import { CurrencyItem } from '../CurrencyItem/CurrencyItem';
import './CurrencyList.css'


export default class CurrencyList extends Component {

  constructor(props) {
    super(props)
    this.state = { currencies: [] }
  }

  componentDidMount() {
    this.fetchBiggestCryptocurrencies()
  }

  fetchBiggestCryptocurrencies() {
    this.setState({
      currencies: [
        {
            "id": "bitcoin", 
            "name": "Bitcoin", 
            "symbol": "BTC", 
            "rank": "1", 
            "price_usd": "7553.9366313"
        }, 
        {
            "id": "ethereum", 
            "name": "Ethereum", 
            "symbol": "ETH", 
            "rank": "2", 
            "price_usd": "153.778566021"
        }, 
        {
            "id": "ripple", 
            "name": "XRP", 
            "symbol": "XRP", 
            "rank": "3", 
            "price_usd": "0.2255542048"
        }, 
        {
            "id": "tether", 
            "name": "Tether", 
            "symbol": "USDT", 
            "rank": "4", 
            "price_usd": "1.0040869902"
        }, 
        {
            "id": "bitcoin-cash", 
            "name": "Bitcoin Cash", 
            "symbol": "BCH", 
            "rank": "5", 
            "price_usd": "221.507745364"
        }, 
        {
            "id": "litecoin", 
            "name": "Litecoin", 
            "symbol": "LTC", 
            "rank": "6", 
            "price_usd": "48.0923213395"
        }, 
        {
            "id": "eos", 
            "name": "EOS", 
            "symbol": "EOS", 
            "rank": "7", 
            "price_usd": "2.6710038918"
        }, 
        {
            "id": "binance-coin", 
            "name": "Binance Coin", 
            "symbol": "BNB", 
            "rank": "8", 
            "price_usd": "16.1236889117"
        }, 
        {
            "id": "bitcoin-sv", 
            "name": "Bitcoin SV", 
            "symbol": "BSV", 
            "rank": "9", 
            "price_usd": "108.308785523"
        }, 
        {
            "id": "stellar", 
            "name": "Stellar", 
            "symbol": "XLM", 
            "rank": "10", 
            "price_usd": "0.0592298253"
        },
    ]
    })
  }

  render() {
    const currencies = this.state.currencies
    return (
      <div>
        {currencies.map(c => (
          <div className="Item" key={c.id} >
            <CurrencyItem currency={c} />
          </div>
        ))}
      </div>
    )
  }

}
