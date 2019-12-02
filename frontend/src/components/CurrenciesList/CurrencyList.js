import React, { Component } from 'react';
import { CurrencyItem } from '../CurrencyItem/CurrencyItem';
import './CurrencyList.css'
import { KryptocoinAPI } from '../../config/service';


export default class CurrencyList extends Component {

  constructor(props) {
    super(props)
    this.state = { currencies: [] }
    this.handleReloadButton = this.handleReloadButton.bind(this)
  }

  componentDidMount() {
    this.fetchBiggestCryptocurrencies()
  }

  handleReloadButton() {
    this.fetchBiggestCryptocurrencies()
  }

  fetchBiggestCryptocurrencies() {
    KryptocoinAPI.get('/listar-maiores')
    .then(response => {
      if (response.data)
        this.setState({ currencies: response.data })
    })
    .catch(_ => {
        this.setState({ currencies: [{ name: 'Erro', symbol: '', price_usd: 'Falha na Conexão', rank: '' }] })
    })
  }

  render() {
    const currencies = this.state.currencies
    return (
      <div className="CurrencyListContainer">
        <div className="CurrencyListHeader">
          <p>Top 10 Criptomoedas</p>
          <button className="ReloadButton" onClick={this.handleReloadButton}>
            <img src={process.env.PUBLIC_URL + '/reload-icon.png'} alt="Reload"></img>
          </button>
        </div>
        {currencies.map((c, i) => (
          <div className="Item" key={c.id} >
            <CurrencyItem currency={c} rank={i+1} />
          </div>
        ))}
      </div>
    )
  }

}
