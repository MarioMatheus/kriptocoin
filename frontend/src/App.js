import React from 'react';
import './App.css';
// import { CurrencyItem } from './components/CurrencyItem/CurrencyItem';
import CurrencyList from './components/CurrenciesList/CurrencyList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          Kriptocoin
      </header>
      <article className="BiggestList">
        <h3>Top 10</h3>
        <CurrencyList />
      </article>
    </div>
  );
}

export default App;
