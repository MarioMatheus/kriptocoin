import React, { Component } from 'react'
import './CurrencySearch.css'
import SearchInput from '../SearchInput/SearchInput'
import { CurrencyCard } from '../CurrencyCard/CurrencyCard'


export default class CurrencySearch extends Component {

  constructor(props) {
    super(props)
    this.state = { cryptocurrency: null }
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch(text) {
    console.log(`Pesquisando Criptomoeda ${text}`)
    this.setState({
      cryptocurrency: {
        "id": "binance-coin", 
        "name": "Binance Coin", 
        "symbol": "BNB", 
        "rank": "8", 
        "price_usd": "16.1236889117", 
        "price_btc": "0.00213451", 
        "24h_volume_usd": "240850888.052", 
        "market_cap_usd": "2507825575.0", 
        "available_supply": "155536713.0", 
        "total_supply": "187536713.0", 
        "max_supply": "187536713.0", 
        "percent_change_1h": "0.95", 
        "percent_change_24h": "3.6", 
        "percent_change_7d": "-11.87", 
        "last_updated": "1574879885"
      }
    })
  }

  render() {
    return (
      <div>
        <SearchInput className="SearchInput" onSearch={this.handleSearch} />
        <CurrencyCard className="CurrencySearchCard" currency={this.state.cryptocurrency} />
      </div>
    )
  }

}
