import React from 'react';
import './App.css';
import CurrencyList from './components/CurrenciesList/CurrencyList';
import CurrencySearch from './components/CurrencySearch/CurrencySearch';


function App() {
  return (
    <div className="App">
      <header className="App-header">
          Kriptocoin
      </header>
      <article className="App-container">
        <section className="BiggestList">
          <h3>Top 10</h3>
          <CurrencyList />
        </section>
        <section className="CurrencySearch">
          <CurrencySearch />
        </section>
      </article>
    </div>
  );
}

export default App;
