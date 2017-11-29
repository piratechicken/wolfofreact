import React, { Component } from 'react';
import StockInfo from './components/Stockinfo'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Wolf of React</h1>
        <StockInfo 
            symbol = { 'nfs' }
            companyName = { '4' }
            primaryExchange = { '%4' }
            latestPrice = { '$5' }
            latestSource = { 'somewhere' }
            week52High = { '5.5' }
            week52Low = { '4.4' }
        />
      </div>
    );
  }
}

export default App;
