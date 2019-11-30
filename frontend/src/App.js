import React from 'react';
import './App.css';
import CurrencyList from './components/CurrenciesList/CurrencyList';
import SearchInput from './components/SearchInput/SearchInput';


function App() {
  return (
    <div className="App">
      <header className="App-header">
          Kriptocoin
      </header>
      <section className="BiggestList">
        <h3>Top 10</h3>
        <CurrencyList />
      </section>
      <section>
        <SearchInput />
      </section>
    </div>
  );
}

export default App;
