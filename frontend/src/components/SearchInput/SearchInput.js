import React, { Component } from 'react'
import './SearchInput.css'

export default class SearchInput extends Component {

  constructor(props) {
    super(props)
    this.state = { inputText: '' }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleSearchButtonClick = this.handleSearchButtonClick.bind(this)
  }

  handleInputChange(e) {
    this.setState({ inputText: e.target.value })
  }

  handleKeyDown(e) {
    if (e.keyCode === 13) {
      this.handleSearchButtonClick()
    }
  }

  handleSearchButtonClick() {
    console.log(this.state.inputText)
    const searchCompletion = this.props.onSearch
    if (searchCompletion) {
      searchCompletion(this.state.inputText)
    }
  }

  render() {
    return (
      <div className="SearchInputContainer">

        <input
          className="SearchTextInput"
          type="text"
          placeholder="Digite o código da criptomoeda. Ex.: BTC" 
          value={this.state.inputText}
          onChange={this.handleInputChange}
          onKeyDown={this.handleKeyDown}/>

        <button
          className="SearchButton"
          onClick={this.handleSearchButtonClick}>
            Pesquisar
        </button>

      </div>
    )
  }

}
