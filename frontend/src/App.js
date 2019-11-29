import React from 'react';
import './App.css';
import { BigCurrencyItem } from './components/BigCurrencyItem/BigCurrencyItem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          Kriptocoin
      </header>
      <article>
        <BigCurrencyItem currency={{ name: 'Bitcoin', price_usd: 7553.9366313, rank: 1, symbol: 'BTC' }}/>
      </article>
    </div>
  );
}

export default App;
