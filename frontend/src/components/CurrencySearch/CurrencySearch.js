import React, { Component } from 'react'
import './CurrencySearch.css'
import SearchInput from '../SearchInput/SearchInput'
import { CurrencyCard } from '../CurrencyCard/CurrencyCard'
import { KryptocoinAPI } from '../../config/service'


export default class CurrencySearch extends Component {

  constructor(props) {
    super(props)
    this.state = { cryptocurrency: null, hasError: false }
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch(text) {
    KryptocoinAPI.get(`/buscar?codigo=${text}`)
    .then(response => {
      if (response.data)
        this.setState({ cryptocurrency: response.data, hasError: false })
    })
    .catch(_ => this.setState({ hasError: true }))
  }

  render() {
    return (
      <div>
        <SearchInput className="SearchInput" onSearch={this.handleSearch} />
        {this.state.hasError && <p style={{color: 'white'}}>Criptomoeda não encontrada</p>}
        <CurrencyCard className="CurrencySearchCard" currency={this.state.cryptocurrency} />
      </div>
    )
  }

}
