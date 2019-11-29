import React from 'react';
import './App.css';
import { CurrencyItem } from './components/CurrencyItem/CurrencyItem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          Kriptocoin
      </header>
      <article>
        <CurrencyItem currency={{ name: 'Bitcoin', price_usd: 7553.9366313, rank: 1, symbol: 'BTC' }}/>
      </article>
    </div>
  );
}

export default App;
